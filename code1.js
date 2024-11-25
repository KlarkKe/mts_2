gdjs.MainScreenCode = {};
gdjs.MainScreenCode.localVariables = [];
gdjs.MainScreenCode.GDmainScreen_9595bgObjects1= [];
gdjs.MainScreenCode.GDmainScreen_9595bgObjects2= [];
gdjs.MainScreenCode.GDplay_9595ButtonObjects1= [];
gdjs.MainScreenCode.GDplay_9595ButtonObjects2= [];
gdjs.MainScreenCode.GDrool_9595ButtonObjects1= [];
gdjs.MainScreenCode.GDrool_9595ButtonObjects2= [];


gdjs.MainScreenCode.mapOfGDgdjs_9546MainScreenCode_9546GDplay_95959595ButtonObjects1Objects = Hashtable.newFrom({"play_Button": gdjs.MainScreenCode.GDplay_9595ButtonObjects1});
gdjs.MainScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loader_lvl", false);
}}

}


};gdjs.MainScreenCode.mapOfGDgdjs_9546MainScreenCode_9546GDrool_95959595ButtonObjects1Objects = Hashtable.newFrom({"rool_Button": gdjs.MainScreenCode.GDrool_9595ButtonObjects1});
gdjs.MainScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "RoolScreen", false);
}}

}


};gdjs.MainScreenCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "bg_sound.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_Button"), gdjs.MainScreenCode.GDplay_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainScreenCode.mapOfGDgdjs_9546MainScreenCode_9546GDplay_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rool_Button"), gdjs.MainScreenCode.GDrool_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainScreenCode.mapOfGDgdjs_9546MainScreenCode_9546GDrool_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.MainScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainScreenCode.GDmainScreen_9595bgObjects1.length = 0;
gdjs.MainScreenCode.GDmainScreen_9595bgObjects2.length = 0;
gdjs.MainScreenCode.GDplay_9595ButtonObjects1.length = 0;
gdjs.MainScreenCode.GDplay_9595ButtonObjects2.length = 0;
gdjs.MainScreenCode.GDrool_9595ButtonObjects1.length = 0;
gdjs.MainScreenCode.GDrool_9595ButtonObjects2.length = 0;

gdjs.MainScreenCode.eventsList2(runtimeScene);
gdjs.MainScreenCode.GDmainScreen_9595bgObjects1.length = 0;
gdjs.MainScreenCode.GDmainScreen_9595bgObjects2.length = 0;
gdjs.MainScreenCode.GDplay_9595ButtonObjects1.length = 0;
gdjs.MainScreenCode.GDplay_9595ButtonObjects2.length = 0;
gdjs.MainScreenCode.GDrool_9595ButtonObjects1.length = 0;
gdjs.MainScreenCode.GDrool_9595ButtonObjects2.length = 0;


return;

}

gdjs['MainScreenCode'] = gdjs.MainScreenCode;
