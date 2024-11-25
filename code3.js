gdjs.PlayScreen_95lvl_951Code = {};
gdjs.PlayScreen_95lvl_951Code.localVariables = [];
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1= [];
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2= [];
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects3= [];
gdjs.PlayScreen_95lvl_951Code.GDbackpack_95951Objects1= [];
gdjs.PlayScreen_95lvl_951Code.GDbackpack_95951Objects2= [];
gdjs.PlayScreen_95lvl_951Code.GDbackpack_95951Objects3= [];
gdjs.PlayScreen_95lvl_951Code.GDmain_9595bgObjects1= [];
gdjs.PlayScreen_95lvl_951Code.GDmain_9595bgObjects2= [];
gdjs.PlayScreen_95lvl_951Code.GDmain_9595bgObjects3= [];


gdjs.PlayScreen_95lvl_951Code.mapOfGDgdjs_9546PlayScreen_959595lvl_9595951Code_9546GDcollectablesObjects1Objects = Hashtable.newFrom({"collectables": gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1});
gdjs.PlayScreen_95lvl_951Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1, gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length;i<l;++i) {
    if ( gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].getBehavior("Animation").getAnimationName() == "ochki" ) {
        isConditionTrue_0 = true;
        gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[k] = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i];
        ++k;
    }
}
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ochki"), true);
}{for(var i = 0, len = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length ;i < len;++i) {
    gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.copyArray(gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1, gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length;i<l;++i) {
    if ( gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].getBehavior("Animation").getAnimationName() == "vorotnik" ) {
        isConditionTrue_0 = true;
        gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[k] = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i];
        ++k;
    }
}
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("vorotnik"), true);
}{for(var i = 0, len = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length ;i < len;++i) {
    gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.copyArray(gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1, gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length;i<l;++i) {
    if ( gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].getBehavior("Animation").getAnimationName() == "sharf" ) {
        isConditionTrue_0 = true;
        gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[k] = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i];
        ++k;
    }
}
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("sharf"), true);
}{for(var i = 0, len = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length ;i < len;++i) {
    gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.copyArray(gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1, gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length;i<l;++i) {
    if ( gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].getBehavior("Animation").getAnimationName() == "sova" ) {
        isConditionTrue_0 = true;
        gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[k] = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i];
        ++k;
    }
}
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("sova"), true);
}{for(var i = 0, len = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length ;i < len;++i) {
    gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.copyArray(gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1, gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length;i<l;++i) {
    if ( gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].getBehavior("Animation").getAnimationName() == "znachok" ) {
        isConditionTrue_0 = true;
        gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[k] = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i];
        ++k;
    }
}
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("znachok"), true);
}{for(var i = 0, len = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length ;i < len;++i) {
    gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.copyArray(gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1, gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length;i<l;++i) {
    if ( gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].getBehavior("Animation").getAnimationName() == "luk" ) {
        isConditionTrue_0 = true;
        gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[k] = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i];
        ++k;
    }
}
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("luk"), true);
}{for(var i = 0, len = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length ;i < len;++i) {
    gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.copyArray(gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1, gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length;i<l;++i) {
    if ( gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].getBehavior("Animation").getAnimationName() == "ruka" ) {
        isConditionTrue_0 = true;
        gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[k] = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i];
        ++k;
    }
}
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ruka"), true);
}{for(var i = 0, len = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length ;i < len;++i) {
    gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.copyArray(gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1, gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length;i<l;++i) {
    if ( gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].getBehavior("Animation").getAnimationName() == "shapka" ) {
        isConditionTrue_0 = true;
        gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[k] = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i];
        ++k;
    }
}
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("shapka"), true);
}{for(var i = 0, len = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length ;i < len;++i) {
    gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.copyArray(gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1, gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length;i<l;++i) {
    if ( gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].getBehavior("Animation").getAnimationName() == "rojok" ) {
        isConditionTrue_0 = true;
        gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[k] = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i];
        ++k;
    }
}
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("trubka"), true);
}{for(var i = 0, len = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length ;i < len;++i) {
    gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.copyArray(gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1, gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length;i<l;++i) {
    if ( gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].getBehavior("Animation").getAnimationName() == "streli" ) {
        isConditionTrue_0 = true;
        gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[k] = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i];
        ++k;
    }
}
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("streli"), true);
}{for(var i = 0, len = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length ;i < len;++i) {
    gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.copyArray(gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1, gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length;i<l;++i) {
    if ( gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].getBehavior("Animation").getAnimationName() == "kniga" ) {
        isConditionTrue_0 = true;
        gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[k] = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i];
        ++k;
    }
}
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("lupa"), true);
}{for(var i = 0, len = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length ;i < len;++i) {
    gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{

/* Reuse gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1.length;i<l;++i) {
    if ( gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1[i].getBehavior("Animation").getAnimationName() == "rezinka_wnds" ) {
        isConditionTrue_0 = true;
        gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1[k] = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1[i];
        ++k;
    }
}
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("rezinka"), true);
}{for(var i = 0, len = gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1.length ;i < len;++i) {
    gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


};gdjs.PlayScreen_95lvl_951Code.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("collectables"), gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PlayScreen_95lvl_951Code.mapOfGDgdjs_9546PlayScreen_959595lvl_9595951Code_9546GDcollectablesObjects1Objects, runtimeScene, true, false);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
{ //Subevents
gdjs.PlayScreen_95lvl_951Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.PlayScreen_95lvl_951Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "WinnerScreen", false);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(true);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) != 3;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LooseScreen", false);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(true);
}}

}


};gdjs.PlayScreen_95lvl_951Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setBoolean(false);
}}

}


{


gdjs.PlayScreen_95lvl_951Code.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 3;
if (isConditionTrue_0) {

{ //Subevents
gdjs.PlayScreen_95lvl_951Code.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.PlayScreen_95lvl_951Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1.length = 0;
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length = 0;
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects3.length = 0;
gdjs.PlayScreen_95lvl_951Code.GDbackpack_95951Objects1.length = 0;
gdjs.PlayScreen_95lvl_951Code.GDbackpack_95951Objects2.length = 0;
gdjs.PlayScreen_95lvl_951Code.GDbackpack_95951Objects3.length = 0;
gdjs.PlayScreen_95lvl_951Code.GDmain_9595bgObjects1.length = 0;
gdjs.PlayScreen_95lvl_951Code.GDmain_9595bgObjects2.length = 0;
gdjs.PlayScreen_95lvl_951Code.GDmain_9595bgObjects3.length = 0;

gdjs.PlayScreen_95lvl_951Code.eventsList3(runtimeScene);
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects1.length = 0;
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects2.length = 0;
gdjs.PlayScreen_95lvl_951Code.GDcollectablesObjects3.length = 0;
gdjs.PlayScreen_95lvl_951Code.GDbackpack_95951Objects1.length = 0;
gdjs.PlayScreen_95lvl_951Code.GDbackpack_95951Objects2.length = 0;
gdjs.PlayScreen_95lvl_951Code.GDbackpack_95951Objects3.length = 0;
gdjs.PlayScreen_95lvl_951Code.GDmain_9595bgObjects1.length = 0;
gdjs.PlayScreen_95lvl_951Code.GDmain_9595bgObjects2.length = 0;
gdjs.PlayScreen_95lvl_951Code.GDmain_9595bgObjects3.length = 0;


return;

}

gdjs['PlayScreen_95lvl_951Code'] = gdjs.PlayScreen_95lvl_951Code;
