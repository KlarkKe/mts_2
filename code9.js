gdjs.LooseScreenCode = {};
gdjs.LooseScreenCode.localVariables = [];
gdjs.LooseScreenCode.GDlooseScreen_9595bgObjects1= [];
gdjs.LooseScreenCode.GDlooseScreen_9595bgObjects2= [];
gdjs.LooseScreenCode.GDlooseScreen_9595bgObjects3= [];
gdjs.LooseScreenCode.GDtryAgain_9595ButtonObjects1= [];
gdjs.LooseScreenCode.GDtryAgain_9595ButtonObjects2= [];
gdjs.LooseScreenCode.GDtryAgain_9595ButtonObjects3= [];


gdjs.LooseScreenCode.mapOfGDgdjs_9546LooseScreenCode_9546GDtryAgain_95959595ButtonObjects1Objects = Hashtable.newFrom({"tryAgain_Button": gdjs.LooseScreenCode.GDtryAgain_9595ButtonObjects1});
gdjs.LooseScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loader_lvl", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loader_lvl", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loader_lvl", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loader_lvl", false);
}}

}


};gdjs.LooseScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}
{ //Subevents
gdjs.LooseScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.LooseScreenCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("tryAgain_Button"), gdjs.LooseScreenCode.GDtryAgain_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LooseScreenCode.mapOfGDgdjs_9546LooseScreenCode_9546GDtryAgain_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LooseScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.LooseScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LooseScreenCode.GDlooseScreen_9595bgObjects1.length = 0;
gdjs.LooseScreenCode.GDlooseScreen_9595bgObjects2.length = 0;
gdjs.LooseScreenCode.GDlooseScreen_9595bgObjects3.length = 0;
gdjs.LooseScreenCode.GDtryAgain_9595ButtonObjects1.length = 0;
gdjs.LooseScreenCode.GDtryAgain_9595ButtonObjects2.length = 0;
gdjs.LooseScreenCode.GDtryAgain_9595ButtonObjects3.length = 0;

gdjs.LooseScreenCode.eventsList2(runtimeScene);
gdjs.LooseScreenCode.GDlooseScreen_9595bgObjects1.length = 0;
gdjs.LooseScreenCode.GDlooseScreen_9595bgObjects2.length = 0;
gdjs.LooseScreenCode.GDlooseScreen_9595bgObjects3.length = 0;
gdjs.LooseScreenCode.GDtryAgain_9595ButtonObjects1.length = 0;
gdjs.LooseScreenCode.GDtryAgain_9595ButtonObjects2.length = 0;
gdjs.LooseScreenCode.GDtryAgain_9595ButtonObjects3.length = 0;


return;

}

gdjs['LooseScreenCode'] = gdjs.LooseScreenCode;
