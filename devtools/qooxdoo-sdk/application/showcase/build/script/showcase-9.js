qx.$$packageData['aacbe4e59d28']={"locales":{},"resources":{},"translations":{}};

qx.Part.$$notifyLoad("aacbe4e59d28", function() {
(function(){var k="pressed",j="abandoned",i="hovered",h="Boolean",g="Space",f="undetermined",d="Enter",c="checked",b="mousedown",a="_applyTriState",w="mouseout",v="changeValue",u="keydown",t="_applyGroup",s="button",r="execute",q="qx.ui.form.RadioGroup",p="_applyValue",o="qx.ui.form.ToggleButton",n="mouseover",l="keyup",m="mouseup";
qx.Class.define(o,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable,qx.ui.form.IRadioItem],construct:function(x,y){qx.ui.basic.Atom.call(this,x,y);
this.addListener(n,this._onMouseOver);
this.addListener(w,this._onMouseOut);
this.addListener(b,this._onMouseDown);
this.addListener(m,this._onMouseUp);
this.addListener(u,this._onKeyDown);
this.addListener(l,this._onKeyUp);
this.addListener(r,this._onExecute,this);
},properties:{appearance:{refine:true,init:s},focusable:{refine:true,init:true},value:{check:h,nullable:true,event:v,apply:p,init:false},group:{check:q,nullable:true,apply:t},triState:{check:h,apply:a,nullable:true,init:null}},members:{_applyGroup:function(z,A){if(A){A.remove(this);
}
if(z){z.add(this);
}},_applyValue:function(B,C){B?this.addState(c):this.removeState(c);

if(this.isTriState()){if(B===null){this.addState(f);
}else if(C===null){this.removeState(f);
}}},_applyTriState:function(D,E){this._applyValue(this.getValue());
},_onExecute:function(e){this.toggleValue();
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(i);

if(this.hasState(j)){this.removeState(j);
this.addState(k);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(i);

if(this.hasState(k)){if(!this.getValue()){this.removeState(k);
}this.addState(j);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(j);
this.addState(k);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(j)){this.removeState(j);
}else if(this.hasState(k)){this.execute();
}this.removeState(k);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case d:case g:this.removeState(j);
this.addState(k);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(k)){return;
}
switch(e.getKeyIdentifier()){case d:case g:this.removeState(j);
this.execute();
this.removeState(k);
e.stopPropagation();
}}}});
})();
(function(){var b="checkbox",a="qx.ui.form.CheckBox";
qx.Class.define(a,{extend:qx.ui.form.ToggleButton,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IForm,qx.ui.form.IModel],construct:function(c){{};
qx.ui.form.ToggleButton.call(this,c);
this.setValue(false);
},properties:{appearance:{refine:true,init:b},allowGrowX:{refine:true,init:false}}});
})();
(function(){var h="auto",g="textarea",f="Boolean",d="qx.ui.form.TextArea",c="_applyWrap",b="Integer",a="mousewheel";
qx.Class.define(d,{extend:qx.ui.form.AbstractField,construct:function(i){qx.ui.form.AbstractField.call(this,i);
this.initWrap();
this.addListener(a,this._onMousewheel,this);
},properties:{wrap:{check:f,init:true,apply:c},appearance:{refine:true,init:g},singleStep:{check:b,init:20}},members:{_onMousewheel:function(e){var j=this.getContentElement();
var scrollY=j.getScrollY();
j.scrollToY(scrollY+e.getWheelDelta()*this.getSingleStep());
var k=j.getScrollY();

if(k!=scrollY){e.stop();
}},_createInputElement:function(){return new qx.html.Input(g,{overflowX:h,overflowY:h});
},_applyWrap:function(l,m){this.getContentElement().setWrap(l);
},_getContentHint:function(){var n=qx.ui.form.AbstractField.prototype._getContentHint.call(this);
n.height=n.height*4;
n.width=this._getTextSize().width*20;
return n;
}}});
})();
(function(){var k="value",j="placeholder",h="CheckBox:",g="TextArea:",f="Boolean",e="RepeatButton:",d="execute",c="Text",b="ToggleButton",a="password",M="RadioButton 3",L="showcase.page.form.Content",K="Button:",J="ComboBox:",I="ToggleButton:",H="RadioButton",G="0",F="MenuButton:",E="Button",D="PasswordField:",r="SplitButton",s="Buttons",p="RadioButtons:",q="dd.mm.YYYY",n="List:",o="SplitButton:",l="RadioButton 1",m="Spinner:",t="Selection",u="DateField:",x="RadioButton 2",w="Number",z="CheckBox",y="SelectBox:",B="MenuButton",A="Slider:",v="TextField:",C="RadioButtonGroup:";
qx.Class.define(L,{extend:showcase.AbstractContent,construct:function(N){showcase.AbstractContent.call(this,N);
this.setView(this._createView());
},members:{_createView:function(){var be=new qx.ui.layout.Grid(20,5);
be.setColumnFlex(0,1);
be.setColumnFlex(1,1);
var bo=new qx.ui.container.Composite(be);
bo.setPadding(10);
var V=1;
var O=new qx.ui.groupbox.GroupBox(c);
O.setLayout(new qx.ui.layout.Grid(8,8));
O.setWidth(290);
bo.add(O,{row:0,column:0});
var bn=new qx.ui.form.TextField();
bn.setPlaceholder(j);
bn.setTabIndex(V++);
var X=new qx.ui.basic.Label(v);
X.setBuddy(bn);
O.add(X,{row:0,column:0});
O.add(bn,{row:0,column:1});
var U=new qx.ui.form.PasswordField();
U.setTabIndex(V++);
U.setPlaceholder(a);
X=new qx.ui.basic.Label(D);
X.setBuddy(U);
O.add(X,{row:1,column:0});
O.add(U,{row:1,column:1});
var P=new qx.ui.form.TextArea();
P.setTabIndex(V++);
P.setPlaceholder(j);
X=new qx.ui.basic.Label(g);
X.setBuddy(P);
O.add(X,{row:2,column:0});
O.add(P,{row:2,column:1});
var Q=new qx.ui.form.ComboBox();
Q.setTabIndex(V++);
Q.setPlaceholder(j);
X=new qx.ui.basic.Label(J);
X.setBuddy(Q);
O.add(X,{row:3,column:0});
O.add(Q,{row:3,column:1});
this.__KH(Q);
var bg=new qx.ui.form.DateField();
bg.setTabIndex(V++);
bg.setPlaceholder(q);
X=new qx.ui.basic.Label(u);
X.setBuddy(bg);
O.add(X,{row:4,column:0});
O.add(bg,{row:4,column:1});
var W=new qx.ui.groupbox.GroupBox(t);
W.setLayout(new qx.ui.layout.Grid(8,8));
W.setWidth(290);
bo.add(W,{row:1,column:0,rowSpan:2});
var bh=new qx.ui.form.SelectBox();
bh.setTabIndex(V++);
X=new qx.ui.basic.Label(y);
X.setBuddy(bh);
W.add(X,{row:0,column:0});
W.add(bh,{row:0,column:1});
this.__KH(bh);
var bm=new qx.ui.form.List();
bm.setTabIndex(V++);
bm.setHeight(60);
bm.setWidth(155);
X=new qx.ui.basic.Label(n);
X.setBuddy(bm);
W.add(X,{row:1,column:0});
W.add(bm,{row:1,column:1});
this.__KH(bm);
var bf=new qx.ui.form.RadioButtonGroup();
bf.add(new qx.ui.form.RadioButton(l).set({tabIndex:V++}));
bf.add(new qx.ui.form.RadioButton(x).set({tabIndex:V++}));
bf.add(new qx.ui.form.RadioButton(M).set({tabIndex:V++}));
X=new qx.ui.basic.Label(C);
X.setBuddy(bf);
W.add(X,{row:2,column:0});
W.add(bf,{row:2,column:1});
var bk=new qx.ui.groupbox.GroupBox(s);
bk.setLayout(new qx.ui.layout.Grid(8,8));
bk.setWidth(250);
bo.add(bk,{row:0,column:1});
var bl=new qx.ui.form.Button(E).set({tabIndex:V++});
X=new qx.ui.basic.Label(K);
X.setBuddy(bl);
bk.add(X,{row:0,column:0});
bk.add(bl,{row:0,column:1});
var S=new qx.ui.form.ToggleButton(b).set({tabIndex:V++});
X=new qx.ui.basic.Label(I);
X.setBuddy(S);
bk.add(X,{row:1,column:0});
bk.add(S,{row:1,column:1});
var bb=new qx.ui.form.RepeatButton(G).set({tabIndex:V++});
X=new qx.ui.basic.Label(e);
X.setBuddy(bb);
bk.add(X,{row:2,column:0});
bk.add(bb,{row:2,column:1});
var bc=new qx.ui.form.MenuButton(B,null,this.__KI()).set({tabIndex:V++});
X=new qx.ui.basic.Label(F);
X.setBuddy(bc);
bk.add(X,{row:3,column:0});
bk.add(bc,{row:3,column:1});
var T=new qx.ui.form.SplitButton(r,null,this.__KJ()).set({tabIndex:V++});
X=new qx.ui.basic.Label(o);
X.setBuddy(T);
bk.add(X,{row:4,column:0});
bk.add(T,{row:4,column:1});
bb.addListener(d,function(){var bp=parseInt(bb.getLabel())+1;
bb.setLabel(bp.toString());
});
var R=new qx.ui.groupbox.GroupBox(f);
R.setLayout(new qx.ui.layout.Grid(8,8));
R.setWidth(250);
bo.add(R,{row:1,column:1});
var bi=new qx.ui.form.CheckBox(z).set({tabIndex:V++});
X=new qx.ui.basic.Label(h);
X.setBuddy(bi);
R.add(X,{row:0,column:0});
R.add(bi,{row:0,column:1});
var ba=new qx.ui.form.RadioButton(H).set({tabIndex:V++});
R.add(new qx.ui.basic.Label(p),{row:1,column:0});
R.add(ba,{row:1,column:1});
var bj=new qx.ui.groupbox.GroupBox(w);
bj.setLayout(new qx.ui.layout.Grid(8,8));
bj.setWidth(250);
bo.add(bj,{row:2,column:1});
var Y=new qx.ui.form.Spinner(0,50,100).set({tabIndex:V++});
X=new qx.ui.basic.Label(m);
X.setBuddy(Y);
bj.add(X,{row:0,column:0});
bj.add(Y,{row:0,column:1});
var bd=new qx.ui.form.Slider().set({tabIndex:V++});
bd.setWidth(130);
X=new qx.ui.basic.Label(A);
X.setBuddy(bd);
bj.add(X,{row:1,column:0});
bj.add(bd,{row:1,column:1});
bd.bind(k,Y,k);
Y.bind(k,bd,k);
return bo;
},__KH:function(bq){for(var i=0;i<10;i++){var br=new qx.ui.form.ListItem("Item "+i);
bq.add(br);
}},__KI:function(){var bs=new qx.ui.menu.Menu;

for(var i=0;i<3;i++){bs.add(new qx.ui.menu.RadioButton("Option"+i));
}var bv=new qx.ui.form.RadioGroup;
bv.add.apply(bv,bs.getChildren());
var bu=new qx.ui.menu.Menu();

for(var i=0;i<3;i++){var bw=new qx.ui.menu.Button("Button"+i);
bu.add(bw);
}var bt=new qx.ui.menu.Button("Options","",null,bs);
bu.addSeparator();
bu.add(bt);
return bu;
},__KJ:function(){var bx=new qx.ui.menu.Menu;
var bA=new qx.ui.menu.Button("Website 1");
var by=new qx.ui.menu.Button("Website 2");
var bz=new qx.ui.menu.Button("Website 3");
bx.add(bA);
bx.add(by);
bx.add(bz);
return bx;
}}});
})();
(function(){var k="button",j="hovered",i="pressed",h="arrow",g="Enter",f="Space",d="abandoned",c="both",b="String",a="changeVisibility",A="splitbutton",z="changeShow",y="mouseout",x="keydown",w="execute",v="_applyMenu",u="icon",t="mouseover",s="keyup",r="qx.ui.menu.Menu",p="_applyIcon",q="label",n="_applyShow",o="changeMenu",l="_applyLabel",m="qx.ui.form.SplitButton";
qx.Class.define(m,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(B,C,D,E){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(h);
this.addListener(t,this._onMouseOver,this,true);
this.addListener(y,this._onMouseOut,this,true);
this.addListener(x,this._onKeyDown);
this.addListener(s,this._onKeyUp);
if(B!=null){this.setLabel(B);
}
if(C!=null){this.setIcon(C);
}
if(D!=null){this.setMenu(D);
}
if(E!=null){this.setCommand(E);
}},properties:{appearance:{refine:true,init:A},focusable:{refine:true,init:true},label:{apply:l,nullable:true,check:b},icon:{check:b,apply:p,nullable:true,themeable:true},show:{init:c,check:[c,q,u],themeable:true,inheritable:true,apply:n,event:z},menu:{check:r,nullable:true,apply:v,event:o}},members:{__AN:null,_createChildControlImpl:function(F,G){var H;

switch(F){case k:H=new qx.ui.form.Button;
H.addListener(w,this._onButtonExecute,this);
H.setFocusable(false);
this._addAt(H,0,{flex:1});
break;
case h:H=new qx.ui.form.MenuButton;
H.setFocusable(false);
this._addAt(H,1);
break;
}return H||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},_forwardStates:{hovered:1,focused:1},_applyLabel:function(I,J){var K=this.getChildControl(k);
I==null?K.resetLabel():K.setLabel(I);
},_applyIcon:function(L,M){var N=this.getChildControl(k);
L==null?N.resetIcon():N.setIcon(L);
},_applyMenu:function(O,P){var Q=this.getChildControl(h);

if(O){Q.resetEnabled();
Q.setMenu(O);
O.setOpener(this);
O.addListener(a,this._onChangeMenuVisibility,this);
}else{Q.setEnabled(false);
Q.resetMenu();
}
if(P){P.removeListener(a,this._onChangeMenuVisibility,this);
P.resetOpener();
}},_applyShow:function(R,S){},_onMouseOver:function(e){e.stopPropagation();
this.addState(j);
delete this.__AN;
},_onMouseOut:function(e){e.stopPropagation();
if(!this.hasState(j)){return;
}var U=e.getRelatedTarget();

if(qx.ui.core.Widget.contains(this,U)){return;
}var T=this.getMenu();

if(T&&T.isVisible()){this.__AN=true;
return;
}this.removeState(j);
},_onKeyDown:function(e){var V=this.getChildControl(k);

switch(e.getKeyIdentifier()){case g:case f:V.removeState(d);
V.addState(i);
}},_onKeyUp:function(e){var W=this.getChildControl(k);

switch(e.getKeyIdentifier()){case g:case f:if(W.hasState(i)){W.removeState(d);
W.removeState(i);
W.execute();
}}},_onButtonExecute:function(e){this.execute();
},_onChangeMenuVisibility:function(e){if(!this.getMenu().isVisible()&&this.__AN){this.removeState(j);
}}}});
})();
(function(){var k="textfield",j="",i="downbutton",h="upbutton",g="Number",f="inner",d="PageUp",c="Boolean",b="changeValue",a="Down",J="Up",I="execute",H="PageDown",G="changeLocale",F="qx.dynlocale",E="on",D="_applyEditable",C="_applyWrap",B="keydown",A="\-]",r="mousewheel",s="_applyValue",p="number",q="_applyMinimum",n="qx.util.format.NumberFormat",o="[0-9",l="keyup",m="spinner",t="this._checkValue(value)",u="_applyMaximum",w="changeNumberFormat",v="changeMaximum",y="changeMinimum",x="_applyNumberFormat",z="qx.ui.form.Spinner";
qx.Class.define(z,{extend:qx.ui.core.Widget,implement:[qx.ui.form.INumberForm,qx.ui.form.IRange,qx.ui.form.IForm],include:[qx.ui.core.MContentPadding,qx.ui.form.MForm],construct:function(K,L,M){qx.ui.core.Widget.call(this);
var N=new qx.ui.layout.Grid();
N.setColumnFlex(0,1);
N.setRowFlex(0,1);
N.setRowFlex(1,1);
this._setLayout(N);
this.addListener(B,this._onKeyDown,this);
this.addListener(l,this._onKeyUp,this);
this.addListener(r,this._onMouseWheel,this);

if(qx.core.Variant.isSet(F,E)){qx.locale.Manager.getInstance().addListener(G,this._onChangeLocale,this);
}this._createChildControl(k);
this._createChildControl(h);
this._createChildControl(i);
if(K!=null){this.setMinimum(K);
}
if(M!=null){this.setMaximum(M);
}
if(L!==undefined){this.setValue(L);
}else{this.initValue();
}},properties:{appearance:{refine:true,init:m},focusable:{refine:true,init:true},singleStep:{check:g,init:1},pageStep:{check:g,init:10},minimum:{check:g,apply:q,init:0,event:y},value:{check:t,nullable:true,apply:s,init:0,event:b},maximum:{check:g,apply:u,init:100,event:v},wrap:{check:c,init:false,apply:C},editable:{check:c,init:true,apply:D},numberFormat:{check:n,apply:x,nullable:true},allowShrinkY:{refine:true,init:false}},members:{__zG:null,__zH:false,__zI:false,_createChildControlImpl:function(O,P){var Q;

switch(O){case k:Q=new qx.ui.form.TextField();
Q.setFilter(this._getFilterRegExp());
Q.addState(f);
Q.setWidth(40);
Q.setFocusable(false);
Q.addListener(b,this._onTextChange,this);
this._add(Q,{column:0,row:0,rowSpan:2});
break;
case h:Q=new qx.ui.form.RepeatButton();
Q.addState(f);
Q.setFocusable(false);
Q.addListener(I,this._countUp,this);
this._add(Q,{column:1,row:0});
break;
case i:Q=new qx.ui.form.RepeatButton();
Q.addState(f);
Q.setFocusable(false);
Q.addListener(I,this._countDown,this);
this._add(Q,{column:1,row:1});
break;
}return Q||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,O);
},_getFilterRegExp:function(){var V=qx.locale.Number.getDecimalSeparator(qx.locale.Manager.getInstance().getLocale());
var U=qx.locale.Number.getGroupSeparator(qx.locale.Manager.getInstance().getLocale());
var T=j;
var R=j;

if(this.getNumberFormat()!==null){T=this.getNumberFormat().getPrefix()||j;
R=this.getNumberFormat().getPostfix()||j;
}var S=new RegExp(o+qx.lang.String.escapeRegexpChars(V)+qx.lang.String.escapeRegexpChars(U)+qx.lang.String.escapeRegexpChars(T)+qx.lang.String.escapeRegexpChars(R)+A);
return S;
},_forwardStates:{focused:true,invalid:true},tabFocus:function(){var W=this.getChildControl(k);
W.getFocusElement().focus();
W.selectAllText();
},_applyMinimum:function(X,Y){if(this.getMaximum()<X){this.setMaximum(X);
}
if(this.getValue()<X){this.setValue(X);
}else{this._updateButtons();
}},_applyMaximum:function(ba,bb){if(this.getMinimum()>ba){this.setMinimum(ba);
}
if(this.getValue()>ba){this.setValue(ba);
}else{this._updateButtons();
}},_applyEnabled:function(bc,bd){qx.ui.core.Widget.prototype._applyEnabled.call(this,bc,bd);
this._updateButtons();
},_checkValue:function(be){return typeof be===p&&be>=this.getMinimum()&&be<=this.getMaximum();
},_applyValue:function(bf,bg){var bh=this.getChildControl(k);
this._updateButtons();
this.__zG=bf;
if(bf!==null){if(this.getNumberFormat()){bh.setValue(this.getNumberFormat().format(bf));
}else{bh.setValue(bf+j);
}}else{bh.setValue(j);
}},_applyEditable:function(bi,bj){var bk=this.getChildControl(k);

if(bk){bk.setReadOnly(!bi);
}},_applyWrap:function(bl,bm){this._updateButtons();
},_applyNumberFormat:function(bn,bo){var bp=this.getChildControl(k);
bp.setFilter(this._getFilterRegExp());
this.getNumberFormat().addListener(w,this._onChangeNumberFormat,this);
this._applyValue(this.__zG,undefined);
},_getContentPaddingTarget:function(){return this.getChildControl(k);
},_updateButtons:function(){var br=this.getChildControl(h);
var bq=this.getChildControl(i);
var bs=this.getValue();

if(!this.getEnabled()){br.setEnabled(false);
bq.setEnabled(false);
}else{if(this.getWrap()){br.setEnabled(true);
bq.setEnabled(true);
}else{if(bs!==null&&bs<this.getMaximum()){br.setEnabled(true);
}else{br.setEnabled(false);
}if(bs!==null&&bs>this.getMinimum()){bq.setEnabled(true);
}else{bq.setEnabled(false);
}}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case d:this.__zH=true;
case J:this.getChildControl(h).press();
break;
case H:this.__zI=true;
case a:this.getChildControl(i).press();
break;
default:return ;
}e.stopPropagation();
e.preventDefault();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case d:this.getChildControl(h).release();
this.__zH=false;
break;
case J:this.getChildControl(h).release();
break;
case H:this.getChildControl(i).release();
this.__zI=false;
break;
case a:this.getChildControl(i).release();
break;
}},_onMouseWheel:function(e){if(e.getWheelDelta()>0){this._countDown();
}else{this._countUp();
}e.stop();
},_onTextChange:function(e){var bt=this.getChildControl(k);
var bu;
if(this.getNumberFormat()){try{bu=this.getNumberFormat().parse(bt.getValue());
}catch(bv){}}if(bu===undefined){bu=parseFloat(bt.getValue(),10);
}if(!isNaN(bu)){if(bu>this.getMaximum()){bt.setValue(this.getMaximum()+j);
return;
}else if(bu<this.getMinimum()){bt.setValue(this.getMinimum()+j);
return;
}this.setValue(bu);
}else{this._applyValue(this.__zG,undefined);
}},_onChangeLocale:function(bw){if(this.getNumberFormat()!==null){this.setNumberFormat(this.getNumberFormat());
var bx=this.getChildControl(k);
bx.setFilter(this._getFilterRegExp());
bx.setValue(this.getNumberFormat().format(this.getValue()));
}},_onChangeNumberFormat:function(by){var bz=this.getChildControl(k);
bz.setFilter(this._getFilterRegExp());
bz.setValue(this.getNumberFormat().format(this.getValue()));
},_countUp:function(){if(this.__zH){var bB=this.getValue()+this.getPageStep();
}else{var bB=this.getValue()+this.getSingleStep();
}if(this.getWrap()){if(bB>this.getMaximum()){var bA=this.getMaximum()-bB;
bB=this.getMinimum()+bA;
}}this.gotoValue(bB);
},_countDown:function(){if(this.__zI){var bD=this.getValue()-this.getPageStep();
}else{var bD=this.getValue()-this.getSingleStep();
}if(this.getWrap()){if(bD<this.getMinimum()){var bC=this.getMinimum()+bD;
bD=this.getMaximum()-bC;
}}this.gotoValue(bD);
},gotoValue:function(bE){return this.setValue(Math.min(this.getMaximum(),Math.max(this.getMinimum(),bE)));
}},destruct:function(){if(qx.core.Variant.isSet(F,E)){qx.locale.Manager.getInstance().removeListener(G,this._onChangeLocale,this);
}}});
})();
(function(){var c="password",b="qx.ui.form.PasswordField",a="input";
qx.Class.define(b,{extend:qx.ui.form.TextField,members:{_createInputElement:function(){var d=new qx.html.Input(c);
d.addListener(a,this._onHtmlInput,this);
return d;
}}});
})();

});