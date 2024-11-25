gdjs.RoolScreenCode = {};
gdjs.RoolScreenCode.localVariables = [];
gdjs.RoolScreenCode.GDroolScreen_9595bgObjects1= [];
gdjs.RoolScreenCode.GDroolScreen_9595bgObjects2= [];
gdjs.RoolScreenCode.GDback_9595buttonObjects1= [];
gdjs.RoolScreenCode.GDback_9595buttonObjects2= [];


gdjs.RoolScreenCode.mapOfGDgdjs_9546RoolScreenCode_9546GDback_95959595buttonObjects1Objects = Hashtable.newFrom({"back_button": gdjs.RoolScreenCode.GDback_9595buttonObjects1});
gdjs.RoolScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainScreen", false);
}}

}


};gdjs.RoolScreenCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back_button"), gdjs.RoolScreenCode.GDback_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RoolScreenCode.mapOfGDgdjs_9546RoolScreenCode_9546GDback_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.RoolScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.RoolScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RoolScreenCode.GDroolScreen_9595bgObjects1.length = 0;
gdjs.RoolScreenCode.GDroolScreen_9595bgObjects2.length = 0;
gdjs.RoolScreenCode.GDback_9595buttonObjects1.length = 0;
gdjs.RoolScreenCode.GDback_9595buttonObjects2.length = 0;

gdjs.RoolScreenCode.eventsList1(runtimeScene);
gdjs.RoolScreenCode.GDroolScreen_9595bgObjects1.length = 0;
gdjs.RoolScreenCode.GDroolScreen_9595bgObjects2.length = 0;
gdjs.RoolScreenCode.GDback_9595buttonObjects1.length = 0;
gdjs.RoolScreenCode.GDback_9595buttonObjects2.length = 0;


return;

}

gdjs['RoolScreenCode'] = gdjs.RoolScreenCode;
