/*
*                 eyeos - The Open Source Cloud's Web Desktop
*                               Version 2.0
*                   Copyright (C) 2007 - 2010 eyeos Team 
* 
* This program is free software; you can redistribute it and/or modify it under
* the terms of the GNU Affero General Public License version 3 as published by the
* Free Software Foundation.
* 
* This program is distributed in the hope that it will be useful, but WITHOUT
* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
* FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
* details.
* 
* You should have received a copy of the GNU Affero General Public License
* version 3 along with this program in the file "LICENSE".  If not, see 
* <http://www.gnu.org/licenses/agpl-3.0.txt>.
* 
* See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
* 
* The interactive user interfaces in modified source and object code versions
* of this program must display Appropriate Legal Notices, as required under
* Section 5 of the GNU Affero General Public License version 3.
* 
* In accordance with Section 7(b) of the GNU Affero General Public License version 3,
* these Appropriate Legal Notices must retain the display of the "Powered by
* eyeos" logo and retain the original copyright notice. If the display of the 
* logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
* must display the words "Powered by eyeos" and retain the original copyright notice. 
*/

qx.Class.define('eyeos.calendar.model.Calendar', {
	extend: qx.core.Object,
	
	statics: {
		/**
		 * 
		 * @param data {Map} JSON-encoded calendar.
		 * @param object {eyeos.calendar.model.Calendar ? undefined}
		 */	
		fromJson: function(data, object) {
			if (typeof object == 'undefined') {
				object = new eyeos.calendar.model.Calendar();
			}
			return object.set({
				id: data.id,
				name: data.name,
				description: data.description ? data.description : '',
				timezone: parseInt(data.timezone),
				ownerId: data.ownerId,
				color: qx.util.ColorUtil.isHex6String(data.preferences.color) ? data.preferences.color : '#ff0000',
				defaultVisible: parseInt(data.preferences.visible) ? true : false,
				visible: parseInt(data.preferences.visible) ? true : false
			});
		},
		
		toJson: function(calendar) {
			return {
				id: calendar.getId(),
				name: calendar.getName(),
				description: calendar.getDescription(),
				timezone: calendar.getTimezone(),
				ownerId: calendar.getOwnerId()
			};
		},
		
		prefsToJson: function(calendar) {
			return {
				id: calendar.getId(),
				color: calendar.getColor(),
				visible: calendar.getDefaultVisible() ? 1 : 0
			};
		}
	},
	
	events: {
		assignId: 'qx.event.type.Data',
		updateDetails: 'qx.event.type.Data',
		createEvent: 'qx.event.type.Data',
		updateOwner: 'qx.event.type.Data',
		updateTimezone: 'qx.event.type.Data'
	},
	
	construct: function() {
		arguments.callee.base.call(this);
	},
	
	properties: {
		id: {
			init: null,
			event: 'assignId'
		},
		
		name: {
			init: '',
			check: 'String',
			event: 'updateDetails'
		},
		
		description: {
			init: '',
			check: 'String',
			event: 'updateDetails'
		},
		
		timezone: {
			init: 0,
			check: 'Number',
			event: 'updateTimezone'
		},
		
		ownerId: {
			init: '',
			check: 'String',
			event: 'updateOwner'
		},
		
		
		//
		// Preferences
		//
		
		/** Default visibility when calendar is loaded */
		defaultVisible: {
			init: true,
			check: 'Boolean'
		},
		
		color: {
			init: '#ff0000',
			check: 'Color',
			event: 'changeColor'
		},
		
		
		//
		// GUI-only properties
		//
		
		/** Current visibility, as seen on the checkbox on the left */
		visible: {
			init: true,
			check: 'Boolean',
			event: 'changeVisibility'
		}
	},
	
	members: {
		
	}
});

qx.Class.define('eyeos.calendar.model.Event', {
	extend: qx.core.Object,
	
	statics: {
		/**
		 * 
		 * @param data {Map} JSON-encoded event.
		 * @param object {eyeos.calendar.model.Event ? undefined}
		 */	
		fromJson: function(data, object) {
			if (typeof object == 'undefined') {
				object = new eyeos.calendar.model.Event();
			}
			return object.set({
				id: data.id,
				subject: data.subject ? data.subject : '',
				location: data.location ? data.location : '',
				description: data.description ? data.description : '',
				allDay: parseInt(data.isAllDay) ? true : false,
				timeStart: new Date(data.timeStart * 1000),
				timeEnd: new Date(data.timeEnd * 1000),
				creatorId: data.creatorId,
				calendar: data.calendar
			});
		},
		
		toJson: function(event) {
			return {
				id: event.getId(),
				subject: event.getSubject(),
				location: event.getLocation(),
				description: event.getDescription(),
				isAllDay: event.isAllDay() ? 1 : 0,
				timeStart: event.getTimeStart().getTime() / 1000,
				timeEnd: event.getTimeEnd().getTime() / 1000,
				creatorId: event.getCreatorId(),
				calendarId: event.getCalendar().getId()
			};
		}
	},
	
	events: {
		assignId: 'qx.event.type.Data',
		changeColor: 'qx.event.type.Data',
		deleteEvent: 'qx.event.type.Data',
		updateDetails: 'qx.event.type.Data',
		updateTime: 'qx.event.type.Data',
		updateParentCalendar: 'qx.event.type.Data',
		updateCreator: 'qx.event.type.Data'
	},
	
	construct: function() {
		arguments.callee.base.call(this);
	},
	
	properties: {
		id: {
			init: null,
			validate: '_validateId',
			event: 'assignId'
		},
		
		subject: {
			init: '',
			check: 'String',
			event: 'updateDetails'
		},
		
		location: {
			init: '',
			check: 'String',
			event: 'updateDetails'
		},
		
		description: {
			init: '',
			check: 'String',
			event: 'updateDetails'
		},
		
			allDay: {
			init: false,
			check: 'Boolean',
			event: 'updateTime'
		},
		
		timeStart: {
			init: new Date(),
			check: 'Date',
			event: 'updateTime'
		},
		
		timeEnd: {
			init: new Date(),
			check: 'Date',
			event: 'updateTime'
		},
		
		creatorId: {
			init: '',
			check: 'String',
			event: 'updateCreator'
		},
		
		calendar: {
			init: '',
			check: 'eyeos.calendar.model.Calendar',
			event: 'updateParentCalendar',
			apply: '_applyCalendar'
		}
	},
	
	members: {
		
		__calendarListenerId: null,
		
		_applyCalendar: function(value, old) {
			if (this.__calendarListenerId != null) {
				old.removeListenerById(this.__calendarListenerId);
			}
			this.__calendarListenerId = value.addListener('changeColor', function(e) {
				this.dispatchEvent(e.clone());
			}, this);
		},
		
		_validateId: function(value) {
			return this.getId() == null;
		}
	}
});