gdjs.PreloaderCode = {};
gdjs.PreloaderCode.localVariables = [];
gdjs.PreloaderCode.GDpreloaderScreen_9595bgObjects1= [];
gdjs.PreloaderCode.GDpreloaderScreen_9595bgObjects2= [];
gdjs.PreloaderCode.GDProgressBarkaObjects1= [];
gdjs.PreloaderCode.GDProgressBarkaObjects2= [];
gdjs.PreloaderCode.GDNewSpriteObjects1= [];
gdjs.PreloaderCode.GDNewSpriteObjects2= [];


gdjs.PreloaderCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ProgressBarka"), gdjs.PreloaderCode.GDProgressBarkaObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0);
}{for(var i = 0, len = gdjs.PreloaderCode.GDProgressBarkaObjects1.length ;i < len;++i) {
    gdjs.PreloaderCode.GDProgressBarkaObjects1[i].getBehavior("Resizable").setWidth(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "LoaderTimer");
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() + gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) <= 2.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ProgressBarka"), gdjs.PreloaderCode.GDProgressBarkaObjects1);
{for(var i = 0, len = gdjs.PreloaderCode.GDProgressBarkaObjects1.length ;i < len;++i) {
    gdjs.PreloaderCode.GDProgressBarkaObjects1[i].getBehavior("Resizable").setWidth(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() / 7 * 301);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "LoaderTimer") > 2.3;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainScreen", false);
}}

}


};

gdjs.PreloaderCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PreloaderCode.GDpreloaderScreen_9595bgObjects1.length = 0;
gdjs.PreloaderCode.GDpreloaderScreen_9595bgObjects2.length = 0;
gdjs.PreloaderCode.GDProgressBarkaObjects1.length = 0;
gdjs.PreloaderCode.GDProgressBarkaObjects2.length = 0;
gdjs.PreloaderCode.GDNewSpriteObjects1.length = 0;
gdjs.PreloaderCode.GDNewSpriteObjects2.length = 0;

gdjs.PreloaderCode.eventsList0(runtimeScene);
gdjs.PreloaderCode.GDpreloaderScreen_9595bgObjects1.length = 0;
gdjs.PreloaderCode.GDpreloaderScreen_9595bgObjects2.length = 0;
gdjs.PreloaderCode.GDProgressBarkaObjects1.length = 0;
gdjs.PreloaderCode.GDProgressBarkaObjects2.length = 0;
gdjs.PreloaderCode.GDNewSpriteObjects1.length = 0;
gdjs.PreloaderCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['PreloaderCode'] = gdjs.PreloaderCode;
