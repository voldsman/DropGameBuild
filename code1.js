gdjs.GameOverCode = {};
gdjs.GameOverCode.GDGameOvertextObjects1= [];
gdjs.GameOverCode.GDGameOvertextObjects2= [];
gdjs.GameOverCode.GDPlayAgainObjects1= [];
gdjs.GameOverCode.GDPlayAgainObjects2= [];
gdjs.GameOverCode.GDHighScoreObjects1= [];
gdjs.GameOverCode.GDHighScoreObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDGameOvertextObjects1Objects = Hashtable.newFrom({"GameOvertext": gdjs.GameOverCode.GDGameOvertextObjects1});
gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDHighScoreObjects1Objects = Hashtable.newFrom({"HighScore": gdjs.GameOverCode.GDHighScoreObjects1});
gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDPlayAgainObjects1Objects = Hashtable.newFrom({"PlayAgain": gdjs.GameOverCode.GDPlayAgainObjects1});
gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.GameOverCode.GDGameOvertextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDGameOvertextObjects1Objects, 0, 200, "");
}{for(var i = 0, len = gdjs.GameOverCode.GDGameOvertextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDGameOvertextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.GameOverCode.GDGameOvertextObjects1[i].getWidth()) / 2);
}
}}

}


{


{
gdjs.GameOverCode.GDHighScoreObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDHighScoreObjects1Objects, 0, 450, "");
}{for(var i = 0, len = gdjs.GameOverCode.GDHighScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDHighScoreObjects1[i].setString("HIGH SCORE: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("HighScore"))));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDHighScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDHighScoreObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.GameOverCode.GDHighScoreObjects1[i].getWidth()) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayAgain"), gdjs.GameOverCode.GDPlayAgainObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDPlayAgainObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GamePlay", false);
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDGameOvertextObjects1.length = 0;
gdjs.GameOverCode.GDGameOvertextObjects2.length = 0;
gdjs.GameOverCode.GDPlayAgainObjects1.length = 0;
gdjs.GameOverCode.GDPlayAgainObjects2.length = 0;
gdjs.GameOverCode.GDHighScoreObjects1.length = 0;
gdjs.GameOverCode.GDHighScoreObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
