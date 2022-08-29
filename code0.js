gdjs.GamePlayCode = {};
gdjs.GamePlayCode.GDLeftArrowObjects1_1final = [];

gdjs.GamePlayCode.GDRightArrowObjects1_1final = [];

gdjs.GamePlayCode.GDBucketObjects1= [];
gdjs.GamePlayCode.GDBucketObjects2= [];
gdjs.GamePlayCode.GDDropletObjects1= [];
gdjs.GamePlayCode.GDDropletObjects2= [];
gdjs.GamePlayCode.GDLeftArrowObjects1= [];
gdjs.GamePlayCode.GDLeftArrowObjects2= [];
gdjs.GamePlayCode.GDRightArrowObjects1= [];
gdjs.GamePlayCode.GDRightArrowObjects2= [];
gdjs.GamePlayCode.GDFenceObjects1= [];
gdjs.GamePlayCode.GDFenceObjects2= [];
gdjs.GamePlayCode.GDGroundObjects1= [];
gdjs.GamePlayCode.GDGroundObjects2= [];
gdjs.GamePlayCode.GDScoreObjects1= [];
gdjs.GamePlayCode.GDScoreObjects2= [];
gdjs.GamePlayCode.GDCloudObjects1= [];
gdjs.GamePlayCode.GDCloudObjects2= [];
gdjs.GamePlayCode.GDUmbrellaObjects1= [];
gdjs.GamePlayCode.GDUmbrellaObjects2= [];

gdjs.GamePlayCode.conditionTrue_0 = {val:false};
gdjs.GamePlayCode.condition0IsTrue_0 = {val:false};
gdjs.GamePlayCode.condition1IsTrue_0 = {val:false};
gdjs.GamePlayCode.condition2IsTrue_0 = {val:false};
gdjs.GamePlayCode.conditionTrue_1 = {val:false};
gdjs.GamePlayCode.condition0IsTrue_1 = {val:false};
gdjs.GamePlayCode.condition1IsTrue_1 = {val:false};
gdjs.GamePlayCode.condition2IsTrue_1 = {val:false};
gdjs.GamePlayCode.conditionTrue_2 = {val:false};
gdjs.GamePlayCode.condition0IsTrue_2 = {val:false};
gdjs.GamePlayCode.condition1IsTrue_2 = {val:false};
gdjs.GamePlayCode.condition2IsTrue_2 = {val:false};


gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDScoreObjects1Objects = Hashtable.newFrom({"Score": gdjs.GamePlayCode.GDScoreObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDUmbrellaObjects1Objects = Hashtable.newFrom({"Umbrella": gdjs.GamePlayCode.GDUmbrellaObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDUmbrellaObjects1Objects = Hashtable.newFrom({"Umbrella": gdjs.GamePlayCode.GDUmbrellaObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDUmbrellaObjects1Objects = Hashtable.newFrom({"Umbrella": gdjs.GamePlayCode.GDUmbrellaObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDUmbrellaObjects1Objects = Hashtable.newFrom({"Umbrella": gdjs.GamePlayCode.GDUmbrellaObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDUmbrellaObjects1Objects = Hashtable.newFrom({"Umbrella": gdjs.GamePlayCode.GDUmbrellaObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDUmbrellaObjects1Objects = Hashtable.newFrom({"Umbrella": gdjs.GamePlayCode.GDUmbrellaObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDLeftArrowObjects2Objects = Hashtable.newFrom({"LeftArrow": gdjs.GamePlayCode.GDLeftArrowObjects2});
gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDRightArrowObjects2Objects = Hashtable.newFrom({"RightArrow": gdjs.GamePlayCode.GDRightArrowObjects2});
gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDBucketObjects1Objects = Hashtable.newFrom({"Bucket": gdjs.GamePlayCode.GDBucketObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDFenceObjects1Objects = Hashtable.newFrom({"Fence": gdjs.GamePlayCode.GDFenceObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDFenceObjects1Objects = Hashtable.newFrom({"Fence": gdjs.GamePlayCode.GDFenceObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDDropletObjects1Objects = Hashtable.newFrom({"Droplet": gdjs.GamePlayCode.GDDropletObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDDropletObjects1Objects = Hashtable.newFrom({"Droplet": gdjs.GamePlayCode.GDDropletObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDBucketObjects1Objects = Hashtable.newFrom({"Bucket": gdjs.GamePlayCode.GDBucketObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDDropletObjects1Objects = Hashtable.newFrom({"Droplet": gdjs.GamePlayCode.GDDropletObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.GamePlayCode.GDGroundObjects1});
gdjs.GamePlayCode.eventsList0 = function(runtimeScene) {

{


gdjs.GamePlayCode.condition0IsTrue_0.val = false;
{
gdjs.GamePlayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GamePlayCode.condition0IsTrue_0.val) {
gdjs.GamePlayCode.GDScoreObjects1.length = 0;

{runtimeScene.getGame().getVariables().get("HighScore").setNumber(0);
}{runtimeScene.getVariables().get("BucketSpeed").setNumber(250);
}{runtimeScene.getVariables().get("DropletSpeed").setNumber(120);
}{runtimeScene.getVariables().get("Health").setNumber(3);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "DropletSpawn");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDScoreObjects1Objects, 0, 150, "UI");
}}

}


{



}


{


gdjs.GamePlayCode.condition0IsTrue_0.val = false;
{
gdjs.GamePlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) == 3;
}if (gdjs.GamePlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Umbrella"), gdjs.GamePlayCode.GDUmbrellaObjects1);
{for(var i = 0, len = gdjs.GamePlayCode.GDUmbrellaObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDUmbrellaObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDUmbrellaObjects1Objects, 10, 80, "Umbrella");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDUmbrellaObjects1Objects, 10 + (( gdjs.GamePlayCode.GDUmbrellaObjects1.length === 0 ) ? 0 :gdjs.GamePlayCode.GDUmbrellaObjects1[0].getWidth()), 80, "Umbrella");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDUmbrellaObjects1Objects, 10 + 2 * (( gdjs.GamePlayCode.GDUmbrellaObjects1.length === 0 ) ? 0 :gdjs.GamePlayCode.GDUmbrellaObjects1[0].getWidth()), 80, "Umbrella");
}{for(var i = 0, len = gdjs.GamePlayCode.GDUmbrellaObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDUmbrellaObjects1[i].setSize(64, 64);
}
}}

}


{


gdjs.GamePlayCode.condition0IsTrue_0.val = false;
{
gdjs.GamePlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) == 2;
}if (gdjs.GamePlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Umbrella"), gdjs.GamePlayCode.GDUmbrellaObjects1);
{for(var i = 0, len = gdjs.GamePlayCode.GDUmbrellaObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDUmbrellaObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDUmbrellaObjects1Objects, 10, 80, "Umbrella");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDUmbrellaObjects1Objects, 10 + (( gdjs.GamePlayCode.GDUmbrellaObjects1.length === 0 ) ? 0 :gdjs.GamePlayCode.GDUmbrellaObjects1[0].getWidth()), 80, "Umbrella");
}{for(var i = 0, len = gdjs.GamePlayCode.GDUmbrellaObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDUmbrellaObjects1[i].setSize(64, 64);
}
}}

}


{


gdjs.GamePlayCode.condition0IsTrue_0.val = false;
{
gdjs.GamePlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) == 1;
}if (gdjs.GamePlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Umbrella"), gdjs.GamePlayCode.GDUmbrellaObjects1);
{for(var i = 0, len = gdjs.GamePlayCode.GDUmbrellaObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDUmbrellaObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDUmbrellaObjects1Objects, 10, 80, "Umbrella");
}{for(var i = 0, len = gdjs.GamePlayCode.GDUmbrellaObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDUmbrellaObjects1[i].setSize(64, 64);
}
}}

}


{


gdjs.GamePlayCode.condition0IsTrue_0.val = false;
{
gdjs.GamePlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) == 0;
}if (gdjs.GamePlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Umbrella"), gdjs.GamePlayCode.GDUmbrellaObjects1);
{for(var i = 0, len = gdjs.GamePlayCode.GDUmbrellaObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDUmbrellaObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GamePlayCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.GamePlayCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDScoreObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.GamePlayCode.GDScoreObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.GamePlayCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDScoreObjects1[i].setString("SCORE: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("HighScore"))));
}
}}

}


{



}


{

gdjs.GamePlayCode.GDLeftArrowObjects1.length = 0;


gdjs.GamePlayCode.condition0IsTrue_0.val = false;
{
{gdjs.GamePlayCode.conditionTrue_1 = gdjs.GamePlayCode.condition0IsTrue_0;
gdjs.GamePlayCode.GDLeftArrowObjects1_1final.length = 0;gdjs.GamePlayCode.condition0IsTrue_1.val = false;
gdjs.GamePlayCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.GamePlayCode.GDLeftArrowObjects2);
{gdjs.GamePlayCode.conditionTrue_2 = gdjs.GamePlayCode.condition0IsTrue_1;
gdjs.GamePlayCode.condition0IsTrue_2.val = false;
gdjs.GamePlayCode.condition1IsTrue_2.val = false;
{
gdjs.GamePlayCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDLeftArrowObjects2Objects, runtimeScene, true, false);
}if ( gdjs.GamePlayCode.condition0IsTrue_2.val ) {
{
gdjs.GamePlayCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.GamePlayCode.conditionTrue_2.val = true && gdjs.GamePlayCode.condition0IsTrue_2.val && gdjs.GamePlayCode.condition1IsTrue_2.val;
}
if( gdjs.GamePlayCode.condition0IsTrue_1.val ) {
    gdjs.GamePlayCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GamePlayCode.GDLeftArrowObjects2.length;j<jLen;++j) {
        if ( gdjs.GamePlayCode.GDLeftArrowObjects1_1final.indexOf(gdjs.GamePlayCode.GDLeftArrowObjects2[j]) === -1 )
            gdjs.GamePlayCode.GDLeftArrowObjects1_1final.push(gdjs.GamePlayCode.GDLeftArrowObjects2[j]);
    }
}
}
{
gdjs.GamePlayCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.GamePlayCode.condition1IsTrue_1.val ) {
    gdjs.GamePlayCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.GamePlayCode.GDLeftArrowObjects1_1final, gdjs.GamePlayCode.GDLeftArrowObjects1);
}
}
}if (gdjs.GamePlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bucket"), gdjs.GamePlayCode.GDBucketObjects1);
{for(var i = 0, len = gdjs.GamePlayCode.GDBucketObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDBucketObjects1[i].setX(gdjs.GamePlayCode.GDBucketObjects1[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("BucketSpeed")) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.GamePlayCode.GDRightArrowObjects1.length = 0;


gdjs.GamePlayCode.condition0IsTrue_0.val = false;
{
{gdjs.GamePlayCode.conditionTrue_1 = gdjs.GamePlayCode.condition0IsTrue_0;
gdjs.GamePlayCode.GDRightArrowObjects1_1final.length = 0;gdjs.GamePlayCode.condition0IsTrue_1.val = false;
gdjs.GamePlayCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("RightArrow"), gdjs.GamePlayCode.GDRightArrowObjects2);
{gdjs.GamePlayCode.conditionTrue_2 = gdjs.GamePlayCode.condition0IsTrue_1;
gdjs.GamePlayCode.condition0IsTrue_2.val = false;
gdjs.GamePlayCode.condition1IsTrue_2.val = false;
{
gdjs.GamePlayCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDRightArrowObjects2Objects, runtimeScene, true, false);
}if ( gdjs.GamePlayCode.condition0IsTrue_2.val ) {
{
gdjs.GamePlayCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.GamePlayCode.conditionTrue_2.val = true && gdjs.GamePlayCode.condition0IsTrue_2.val && gdjs.GamePlayCode.condition1IsTrue_2.val;
}
if( gdjs.GamePlayCode.condition0IsTrue_1.val ) {
    gdjs.GamePlayCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GamePlayCode.GDRightArrowObjects2.length;j<jLen;++j) {
        if ( gdjs.GamePlayCode.GDRightArrowObjects1_1final.indexOf(gdjs.GamePlayCode.GDRightArrowObjects2[j]) === -1 )
            gdjs.GamePlayCode.GDRightArrowObjects1_1final.push(gdjs.GamePlayCode.GDRightArrowObjects2[j]);
    }
}
}
{
gdjs.GamePlayCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.GamePlayCode.condition1IsTrue_1.val ) {
    gdjs.GamePlayCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.GamePlayCode.GDRightArrowObjects1_1final, gdjs.GamePlayCode.GDRightArrowObjects1);
}
}
}if (gdjs.GamePlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bucket"), gdjs.GamePlayCode.GDBucketObjects1);
{for(var i = 0, len = gdjs.GamePlayCode.GDBucketObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDBucketObjects1[i].setX(gdjs.GamePlayCode.GDBucketObjects1[i].getX() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("BucketSpeed")) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bucket"), gdjs.GamePlayCode.GDBucketObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fence"), gdjs.GamePlayCode.GDFenceObjects1);

gdjs.GamePlayCode.condition0IsTrue_0.val = false;
{
gdjs.GamePlayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDBucketObjects1Objects, gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDFenceObjects1Objects, false, runtimeScene, false);
}if (gdjs.GamePlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamePlayCode.GDBucketObjects1 */
/* Reuse gdjs.GamePlayCode.GDFenceObjects1 */
{for(var i = 0, len = gdjs.GamePlayCode.GDBucketObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDBucketObjects1[i].separateFromObjectsList(gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDFenceObjects1Objects, false);
}
}}

}


{



}


{


gdjs.GamePlayCode.condition0IsTrue_0.val = false;
{
gdjs.GamePlayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "DropletSpawn") > 1;
}if (gdjs.GamePlayCode.condition0IsTrue_0.val) {
gdjs.GamePlayCode.GDDropletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDDropletObjects1Objects, gdjs.randomInRange(0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 64), -(70), "Game");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "DropletSpawn");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Droplet"), gdjs.GamePlayCode.GDDropletObjects1);
{for(var i = 0, len = gdjs.GamePlayCode.GDDropletObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDDropletObjects1[i].setY(gdjs.GamePlayCode.GDDropletObjects1[i].getY() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("DropletSpeed")) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bucket"), gdjs.GamePlayCode.GDBucketObjects1);
gdjs.copyArray(runtimeScene.getObjects("Droplet"), gdjs.GamePlayCode.GDDropletObjects1);

gdjs.GamePlayCode.condition0IsTrue_0.val = false;
{
gdjs.GamePlayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDDropletObjects1Objects, gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDBucketObjects1Objects, false, runtimeScene, false);
}if (gdjs.GamePlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamePlayCode.GDDropletObjects1 */
{runtimeScene.getGame().getVariables().get("HighScore").add(3);
}{for(var i = 0, len = gdjs.GamePlayCode.GDDropletObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDDropletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Droplet"), gdjs.GamePlayCode.GDDropletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GamePlayCode.GDGroundObjects1);

gdjs.GamePlayCode.condition0IsTrue_0.val = false;
{
gdjs.GamePlayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDDropletObjects1Objects, gdjs.GamePlayCode.mapOfGDgdjs_46GamePlayCode_46GDGroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.GamePlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamePlayCode.GDDropletObjects1 */
{runtimeScene.getVariables().get("Health").sub(1);
}{for(var i = 0, len = gdjs.GamePlayCode.GDDropletObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDDropletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{



}


};

gdjs.GamePlayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GamePlayCode.GDBucketObjects1.length = 0;
gdjs.GamePlayCode.GDBucketObjects2.length = 0;
gdjs.GamePlayCode.GDDropletObjects1.length = 0;
gdjs.GamePlayCode.GDDropletObjects2.length = 0;
gdjs.GamePlayCode.GDLeftArrowObjects1.length = 0;
gdjs.GamePlayCode.GDLeftArrowObjects2.length = 0;
gdjs.GamePlayCode.GDRightArrowObjects1.length = 0;
gdjs.GamePlayCode.GDRightArrowObjects2.length = 0;
gdjs.GamePlayCode.GDFenceObjects1.length = 0;
gdjs.GamePlayCode.GDFenceObjects2.length = 0;
gdjs.GamePlayCode.GDGroundObjects1.length = 0;
gdjs.GamePlayCode.GDGroundObjects2.length = 0;
gdjs.GamePlayCode.GDScoreObjects1.length = 0;
gdjs.GamePlayCode.GDScoreObjects2.length = 0;
gdjs.GamePlayCode.GDCloudObjects1.length = 0;
gdjs.GamePlayCode.GDCloudObjects2.length = 0;
gdjs.GamePlayCode.GDUmbrellaObjects1.length = 0;
gdjs.GamePlayCode.GDUmbrellaObjects2.length = 0;

gdjs.GamePlayCode.eventsList0(runtimeScene);
return;

}

gdjs['GamePlayCode'] = gdjs.GamePlayCode;
