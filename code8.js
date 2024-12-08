gdjs.WinnerScreenCode = {};
gdjs.WinnerScreenCode.localVariables = [];
gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects1= [];
gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects2= [];
gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects3= [];
gdjs.WinnerScreenCode.GDnextLvl_9595ButtonObjects1= [];
gdjs.WinnerScreenCode.GDnextLvl_9595ButtonObjects2= [];
gdjs.WinnerScreenCode.GDnextLvl_9595ButtonObjects3= [];


gdjs.WinnerScreenCode.mapOfGDgdjs_9546WinnerScreenCode_9546GDnextLvl_95959595ButtonObjects1Objects = Hashtable.newFrom({"nextLvl_Button": gdjs.WinnerScreenCode.GDnextLvl_9595ButtonObjects1});
gdjs.WinnerScreenCode.asyncCallback11098972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.WinnerScreenCode.localVariables);
gdjs.WinnerScreenCode.localVariables.length = 0;
}
gdjs.WinnerScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.WinnerScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.WinnerScreenCode.asyncCallback11098972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.WinnerScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loader_lvl", false);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loader_lvl", false);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loader_lvl", false);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainScreen", false);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setBoolean(true);
}
{ //Subevents
gdjs.WinnerScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.WinnerScreenCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.WinnerScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.WinnerScreenCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("winOrloose_bg"), gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects1);
{for(var i = 0, len = gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects1.length ;i < len;++i) {
    gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects1[i].getBehavior("Animation").setAnimationName("potter");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("winOrloose_bg"), gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects1);
{for(var i = 0, len = gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects1.length ;i < len;++i) {
    gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects1[i].getBehavior("Animation").setAnimationName("wnds");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("winOrloose_bg"), gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects1);
{for(var i = 0, len = gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects1.length ;i < len;++i) {
    gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects1[i].getBehavior("Animation").setAnimationName("sherlock");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("nextLvl_Button"), gdjs.WinnerScreenCode.GDnextLvl_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("winOrloose_bg"), gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects1);
{for(var i = 0, len = gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects1.length ;i < len;++i) {
    gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects1[i].getBehavior("Animation").setAnimationName("kitnis");
}
}{for(var i = 0, len = gdjs.WinnerScreenCode.GDnextLvl_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.WinnerScreenCode.GDnextLvl_9595ButtonObjects1[i].getBehavior("Animation").setAnimationName("back");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("nextLvl_Button"), gdjs.WinnerScreenCode.GDnextLvl_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WinnerScreenCode.mapOfGDgdjs_9546WinnerScreenCode_9546GDnextLvl_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.WinnerScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.WinnerScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects1.length = 0;
gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects2.length = 0;
gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects3.length = 0;
gdjs.WinnerScreenCode.GDnextLvl_9595ButtonObjects1.length = 0;
gdjs.WinnerScreenCode.GDnextLvl_9595ButtonObjects2.length = 0;
gdjs.WinnerScreenCode.GDnextLvl_9595ButtonObjects3.length = 0;

gdjs.WinnerScreenCode.eventsList3(runtimeScene);
gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects1.length = 0;
gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects2.length = 0;
gdjs.WinnerScreenCode.GDwinOrloose_9595bgObjects3.length = 0;
gdjs.WinnerScreenCode.GDnextLvl_9595ButtonObjects1.length = 0;
gdjs.WinnerScreenCode.GDnextLvl_9595ButtonObjects2.length = 0;
gdjs.WinnerScreenCode.GDnextLvl_9595ButtonObjects3.length = 0;


return;

}

gdjs['WinnerScreenCode'] = gdjs.WinnerScreenCode;
