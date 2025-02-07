// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"AltSaveScreen","status":true,"description":"Alternative save/load screen layout.","parameters":{}},
{"name":"ButtonPicture","status":false,"description":"Makes a picture clickable.","parameters":{}},
{"name":"TextPicture","status":false,"description":"Displays text as a picture.","parameters":{}},
{"name":"TorigoyaMZ_EnemyHpBar","status":true,"description":"敵にHPバーを表示プラグイン (v.1.3.2)","parameters":{"base":"","basePosition":"top","basePosX":"0","basePosY":"0","customize":"","customizeCondition":"always","customizeGaugeWidth":"100","customizeGaugeHeight":"10","customizeDrawLabel":"true","customizeLabelWidth":"20","customizeLabelFontSize":"16","customizeValueFontSize":"20","customizeMaskHpValue":"?????"}},
{"name":"Alpha_NETZ","status":false,"description":"(v.0.8)[BASIC] Multiplayer for RPG Maker","parameters":{"ANETZ":"","connection:s":"{\"serverIp\":\"anetzglobal.ru\",\"serverPort\":\"3035\",\"isHttpsConnection:b\":\"false\"}","isCustomGameId:b":"false","customGameId":"","spacer|gamesettings":"","gameModeSettingsGroup":"","onlySameMap:b":"false","singlePlayerAllowed:b":"true","isReadyStatusCheck:b":"false","roomFilter:b":"false","lobbyChat:b":"true","lobbyChatIsGlobal:b":"false","joinStartedAllowed:b":"false","joinStartedAndLoadedAllowed:b":"true","onJoinCE:int":"0","isJoinRandomOptionExists:b":"true","saveLoadGame:b":"true","networkStatusIcons:b":"true","isMapEncountersGlobal:b":"false","inGameChat:b":"true","chatStartMessage":"\\}Welcome to Alpha NET Z, \\C[1]'T'\\C[6] to chat","chatOpenCloseKey":"t","chatSayKey":"t","clickOnChatToSay:b":"true","chatAutoOpen:b":"false","chatMessagesSettings:struct":"{\"maxlength:i\":\"32\",\"forbiddenEscapeCodes:str\":\"V\",\"iconsSize:i\":\"18\",\"allowEmotions:b\":\"true\"}","chatInputSceneVisualSettings:struct":"{\"mapChannelButtonPosition:s\":\"{\\\"x:e\\\":\\\"4\\\",\\\"y:e\\\":\\\"6\\\"}\",\"allChannelButtonPosition:s\":\"{\\\"x:e\\\":\\\"104\\\",\\\"y:e\\\":\\\"6\\\"}\",\"inputSceneOkButtonPosition:s\":\"{\\\"x:e\\\":\\\"356\\\",\\\"y:e\\\":\\\"284\\\"}\"}","inGameChatWindowVisualSettings:struct":"{\"size:s\":\"{\\\"w:int\\\":\\\"312\\\",\\\"h:int\\\":\\\"192\\\"}\",\"position:s\":\"{\\\"x:e\\\":\\\"1\\\",\\\"y:e\\\":\\\"Graphics.height - 193\\\"}\",\"notActiveOpacity:i\":\"140\",\"maxMessages:i\":\"9\",\"firstChatMessageMargin:s\":\"{\\\"x:int\\\":\\\"3\\\",\\\"y:int\\\":\\\"145\\\"}\"}","inGameChatTextLineSettings:struct":"{\"size:s\":\"{\\\"w:int\\\":\\\"306\\\",\\\"h:int\\\":\\\"18\\\"}\",\"backgroundA:s\":\"{\\\"color:str\\\":\\\"#59a3d9\\\",\\\"opacity:i\\\":\\\"40\\\"}\",\"backgroundB:s\":\"{\\\"color:str\\\":\\\"#59a3d9\\\",\\\"opacity:i\\\":\\\"70\\\"}\",\"textLine:s\":\"{\\\"visible:bool\\\":\\\"true\\\",\\\"size:struct\\\":\\\"{\\\\\\\"w:int\\\\\\\":\\\\\\\"520\\\\\\\",\\\\\\\"h:int\\\\\\\":\\\\\\\"20\\\\\\\"}\\\",\\\"font:struct\\\":\\\"{\\\\\\\"face:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size:int\\\\\\\":\\\\\\\"14\\\\\\\",\\\\\\\"italic:bool\\\\\\\":\\\\\\\"false\\\\\\\"}\\\",\\\"margins:struct\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"-3\\\\\\\"}\\\"}\",\"textFormat:str\":\"\\\\}\\\\}\\\\C[3][ *3\",\"animationSpeedInPx:i\":\"18\",\"channelAll:str\":\"ALL\",\"channelMap:str\":\"MAP\"}","playerMenuSettingsGroup:b":"true","defaultIPLMenuCommands":"","PlayerMenuItem_trade:s":"{\"text:str\":\"Trade\",\"visible:b\":\"true\",\"switchId:i\":\"0\",\"minDist:i\":\"1\",\"value:i\":\"0\"}","PlayerMenuItem_status:s":"{\"text:str\":\"Status\",\"visible:b\":\"true\",\"switchId:i\":\"0\",\"minDist:i\":\"0\",\"value:i\":\"0\"}","PlayerMenuItem_follow:s":"{\"text:str\":\"Follow\",\"visible:b\":\"true\",\"switchId:i\":\"0\",\"minDist:i\":\"0\",\"value:i\":\"0\"}","userIPLMenuCommands:structA":"[]","tradeSettingsGroup":"","isTradeModalWindowActive:b":"true","tradeModalWindow_openSE":"Bell3","tradeModalWindow_text":"Accept \\C[1]Trade\\C[0] from \\C[2]%1\\C[0]?","tradeModalWindow_hkYes":"y","tradeModalWindow_hkNo":"n","spacer|playerssettings":"","playersSettingsGroup":"","actorsForNetwork:intA":"[\"1\",\"2\",\"3\",\"4\"]","maxPlayersInRoom:int":"4","isActorSelectionAllowed:b":"true","isSinglePlayerStartAllowed:b":"true","playerActorNameType":"Instead Nickname","isUseNameplates:b":"true","isShowActorNameInNameplate:b":"true","isShowMyNameplate:b":"false","nameplatesDB:structA":"[\"{\\\"id:str\\\":\\\"default\\\",\\\"margins:s\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"-27\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"-20\\\\\\\"}\\\",\\\"backImage:s\\\":\\\"{\\\\\\\"visible:b\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"image:str\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"backImageMargins:s\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"backRect:s\\\":\\\"{\\\\\\\"visible:bool\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"size:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"w:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"54\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"h:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"18\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"fillColor:str\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"fillOpacity:i\\\\\\\":\\\\\\\"120\\\\\\\",\\\\\\\"borderColor:str\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"borderThickness:i\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"borderOpacity:i\\\\\\\":\\\\\\\"255\\\\\\\"}\\\",\\\"backRectMargins:s\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"text:s\\\":\\\"{\\\\\\\"visible:bool\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"size:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"w:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"54\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"h:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"18\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"font:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"face:str\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"size:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"12\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"italic:bool\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"margins:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"x:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"y:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\"}\\\\\\\"}\\\"}\"]","playerLeaveGameCommonEvent:int":"0","globalData:s":"{\"globalVariablesIds:intA\":\"[]\",\"globalSwitchesIds:intA\":\"[]\"}","spacer|othersettings":"","otherSettingsGroup":"","textInputMaxLength:i":"12","localeDB:struct":"{\"network\":\"連線PVE\",\"createRoom\":\"創建房間\",\"joinRoom\":\"加入房間\",\"joinRandomRoom\":\"加入隨機房間\",\"settings\":\"設定\",\"start\":\"開始\",\"leave\":\"離開\",\"joinGame\":\"加入遊戲\",\"ready\":\"準備完成\",\"character\":\"角色\",\"close\":\"關閉\",\"welcome\":\"歡迎 %1\",\"playersCount\":\"伺服器玩家: %1\"}","spacer|endHolder":""}},
{"name":"MZQuizzer","status":true,"description":"v0.0.1 Quiz Engine for MZ","parameters":{}},
{"name":"questionDatabase","status":true,"description":"","parameters":{}},
{"name":"GALV_PuzzleFunctionsMZ","status":true,"description":"(v.1.1) A bunch of functions to use to make eventing puzzles easier\r\nView the plugin \"Help\" to view available commands.","parameters":{}},
{"name":"CGMZ_Core","status":true,"description":"Core CGMZ Plugin, should be placed above all other CGMZ Plugins.","parameters":{"Check for Updates":"true","Dev Tools on Start":"false","Show FPS Counter":"false","Fullscreen":"false","Simulate Production Env":"false","Force Locale":"","Fallback Locale":"en-US"}},
{"name":"CGMZ_MenuCommandWindow","status":true,"description":"Manage the menu command window","parameters":{"Commands":"[\"{\\\"Command Name\\\":\\\"百科全書\\\",\\\"Icon\\\":\\\"0\\\",\\\"Command Symbol\\\":\\\"encyclopedia\\\",\\\"JS Command\\\":\\\"SceneManager.push(CGMZ_Scene_Encyclopedia);\\\",\\\"JS Show Condition\\\":\\\"return true;\\\",\\\"JS Enable Condition\\\":\\\"return true;\\\",\\\"Enable Switch\\\":\\\"0\\\",\\\"Show Switch\\\":\\\"0\\\",\\\"Subcategory\\\":\\\"\\\",\\\"Required Item\\\":\\\"0\\\",\\\"Actor Select\\\":\\\"false\\\",\\\"Common Event\\\":\\\"0\\\",\\\"Background Image\\\":\\\"\\\",\\\"Background Image X\\\":\\\"0\\\",\\\"Background Image Y\\\":\\\"0\\\"}\"]","Command Padding":"9","Alignment":"right","Icon Alignment":"left","Keep Original Commands":"true","Report Command Size":"false"}},
{"name":"CGMZ_Encyclopedia","status":true,"description":"百科全书（记录游戏内各种信息的图鉴）","parameters":{"Functional Options":"","Autodiscover Bestiary":"true","Autodiscover Items":"true","Autodiscover Armors":"true","Autodiscover Weapons":"true","Autodiscover Skills":"true","Autodiscover States":"true","Autodiscover Actors":"true","Autodiscover Skills On Use":"true","Ignore Blank Entries":"true","Ignore Entries With Name":"-----","Opt In Entries":"false","Encyclopedia Item":"0","Category Options":"","Include Bestiary":"true","Include Items":"true","Include Armors":"true","Include Weapons":"true","Include Skills":"true","Include States":"true","Include Actors":"true","Categories":"[\"{\\\"Category Name\\\":\\\"Bestiary\\\",\\\"Category Symbol\\\":\\\"bestiary\\\",\\\"Category Display Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Category Enable Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Command Text\\\":\\\"Bestiary\\\"}\",\"{\\\"Category Name\\\":\\\"Items\\\",\\\"Category Symbol\\\":\\\"items\\\",\\\"Category Display Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Category Enable Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Command Text\\\":\\\"Items\\\"}\",\"{\\\"Category Name\\\":\\\"Armors\\\",\\\"Category Symbol\\\":\\\"armors\\\",\\\"Category Display Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Category Enable Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Command Text\\\":\\\"Armors\\\"}\",\"{\\\"Category Name\\\":\\\"Weapons\\\",\\\"Category Symbol\\\":\\\"weapons\\\",\\\"Category Display Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Category Enable Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Command Text\\\":\\\"Weapons\\\"}\",\"{\\\"Category Name\\\":\\\"Skills\\\",\\\"Category Symbol\\\":\\\"skills\\\",\\\"Category Display Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Category Enable Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Command Text\\\":\\\"Skills\\\"}\",\"{\\\"Category Name\\\":\\\"States\\\",\\\"Category Symbol\\\":\\\"states\\\",\\\"Category Display Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Category Enable Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Command Text\\\":\\\"States\\\"}\",\"{\\\"Category Name\\\":\\\"Actors\\\",\\\"Category Symbol\\\":\\\"actors\\\",\\\"Category Display Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Category Enable Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Command Text\\\":\\\"Actors\\\"}\"]","Subcategories":"[]","Custom Entry Options":"","Custom Entries":"[]","Extra Entry Settings":"","Extra Bestiary Settings":"[]","Extra Item Settings":"[]","Extra Weapon Settings":"[]","Extra Armor Settings":"[]","Extra Skill Settings":"[]","Extra State Settings":"[]","Extra Actor Settings":"[]","Encyclopedia Scene Options":"","Unknown Entry":"? ? ? ? ?","Unknown Entry Display":"还没有收集到相关的信息。","Unknown Entry Purchase Display":"This has not yet been discovered.\r\n\r\nPurchase entry for \\c[3]%price \\g\\c[0]?","Total Window Text":"总完成度:","Total Window Rounding":"2","Total Window Alignment":"left","List Window Alignment":"left","Category Window Alignment":"center","Subcategory Window Alignment":"center","Subcategory Columns":"4","Show Subcategory All":"true","Number Entries":"true","Sort By Discover Date":"false","Reverse Discover Date Sort":"true","Hide Undiscovered":"false","Number Bestiary Skills":"true","Bestiary Skill Number Separator":".","Disable Touch UI Space":"false","Disable Scroll Select":"true","List Window On Right":"false","List Window Width":"33","Categories Per Line":"4","Category Lines":"1","Bestiary List Order":"[]","Items List Order":"[]","Armors List Order":"[]","Weapons List Order":"[]","Skills List Order":"[]","States List Order":"[]","Actors List Order":"[]","Transparent Windows":"false","Default Enemy Battle BGM":"","Category Backgrounds":"[]","Actor Sprite Width":"48","Actor Sprite Height":"48","Actor Sv Motion":"13","Custom Spacing Amount":"10","Window Options":"","Category Window Padding":"-1","Subcategory Window Padding":"-1","List Window Padding":"-1","Total Window Padding":"-1","Display Window Padding":"-1","Purchase Window Padding":"-1","Category Window Back Opacity":"-1","Subcategory Window Back Opacity":"-1","List Window Back Opacity":"-1","Total Window Back Opacity":"-1","Display Window Back Opacity":"-1","Purchase Window Back Opacity":"-1","List Windowskin":"","Display Windowskin":"","Total Windowskin":"","Category Windowskin":"","Subcategory Windowskin":"","Purchase Windowskin":"","Category Window Tone":"{\"Red\":\"-256\",\"Green\":\"0\",\"Blue\":\"0\"}","Subcategory Window Tone":"{\"Red\":\"-256\",\"Green\":\"0\",\"Blue\":\"0\"}","List Window Tone":"{\"Red\":\"-256\",\"Green\":\"0\",\"Blue\":\"0\"}","Total Window Tone":"{\"Red\":\"-256\",\"Green\":\"0\",\"Blue\":\"0\"}","Display Window Tone":"{\"Red\":\"-256\",\"Green\":\"0\",\"Blue\":\"0\"}","Purchase Window Tone":"{\"Red\":\"-256\",\"Green\":\"0\",\"Blue\":\"0\"}","Display Window Options":"","Bestiary Display Info":"[\"Name\",\"Stats\",\"Exp\",\"Gold\",\"Drops\",\"Note\",\"Sketch\"]","Item Display Info":"[\"Name\",\"Icon\",\"Price\",\"Key Item\",\"Possession\",\"Consumable\",\"Success Rate\",\"Effects\",\"Description\",\"Note\"]","Armor Display Info":"[\"Name\",\"Icon\",\"Price\",\"Equip Type\",\"Possession\",\"Armor Type\",\"Stats\",\"Traits\",\"Description\",\"Note\"]","Weapon Display Info":"[\"Name\",\"Icon\",\"Price\",\"Equip Type\",\"Possession\",\"Weapon Type\",\"Stats\",\"Traits\",\"Description\",\"Note\"]","Skill Display Info":"[\"Name\",\"Icon\",\"Type\",\"Costs\",\"Success Rate\",\"TP Gain\",\"Effects\",\"Description\",\"Note\"]","State Display Info":"[\"Name\",\"Icon\",\"Duration\",\"Battle End Removal\",\"Walking Removal\",\"Damage Removal\",\"Traits\",\"Note\"]","Actor Display Info":"[\"Name\",\"Face\",\"Nickname\",\"Class\",\"Profile\",\"Stats\",\"Traits\",\"Note\"]","Custom Display Info":"[\"Name\",\"Description\",\"Sketch\"]","Stat Display Info":"[\"Max HP\",\"Max MP\",\"Attack\",\"Defense\",\"M Attack\",\"M Defense\",\"Agility\",\"Luck\"]","Effect Display Info":"[\"HP Effect\",\"MP Effect\",\"TP Effect\",\"State Add\",\"State Remove\",\"Buff\",\"Debuff\",\"Removed Buff\",\"Removed Debuff\",\"Grow\",\"Learn\"]","Trait Display Info":"[\"Attack Speed\",\"Attack Times\",\"Attack Element\",\"Attack States\",\"Party Ability\",\"Seal Skill Types\",\"Add Skill Types\",\"Add Skills\",\"Seal Skills\",\"State Resist\"]","Strip Newlines In Description":"true","Display TP Costs":"true","Center Icons":"false","Center Face":"false","Scroll Wait":"300","Scroll Speed":"1","Scroll Deceleration":"0.92","Auto Scroll":"true","Large Icon Multiplier":"3.3","Text Options":"","Label Color":"1","Header Color 1":"1","Header Color 2":"0","Yes Text":"是","No Text":"否","Price Text":"价格:","No Price Text":"无法出售","Key Item Text":"关键物品:","Possession Text":"持有数:","Equip Type Text":"装备类型:","Armor Type Text":"护甲类型:","No Armor Type Text":"无","Weapon Type Text":"武器类型:","No Weapon Type Text":"无","Skill Type Text":"技能类型:","No Skill Type Text":"基本技能","Show Drop Chances":"true","Drop Chance Text":"掉落几率:","Note Text":"备注:","Nickname Text":"Nickname:","Class Text":"Class:","Initial Level Text":"Initial Level:","Max Level Text":"Max Level:","Profile Text":"Profile:","Success Rate Text":"成功率:","Consumable Text":"消耗品:","HP Effect Text":"生命值:","MP Effect Text":"法力值:","TP Effect Text":"活力值:","Add State Text":"附加状态:","Remove State Text":"移除状态:","Add Buff Text":"强化:","Add Debuff Text":"弱化:","Remove Buff Text":"解除强化:","Remove Debuff Text":"解除弱化:","Grow Text":"永久提高:","Party Ability Text":"队伍能力:","Half Encounter Text":"遇敌几率减半","No Encounter Text":"不会遇敌。","Cancel Surprise Text":"取消偷袭","Raise Preemptive Text":"先发制人","Gold Double Text":"双倍金钱","Drop Item Double Text":"双倍战利品","Description Text":"描述:","Element Text":"属性:","Attack Speed Text":"攻击速度:","Attack Times Text":"攻击追加次数:","Attack State Text":"攻击附加状态:","MP Cost Text":"MP消耗:","TP Cost Text":"TP消耗:","User TP Gain Text":"TP获得:","Battle Removal Text":"战斗结束后移除:","Walking Removal Text":"移动后移除:","Damage Removal Text":"受伤后移除:","Duration Text":"状态持续:","Infinite Text":"永久","Turns Text":"回合","Seal Skill Types Text":"封印:","Add Skill Types Text":"解除封印:","Seal Skill Text":"封印:","Add Skill Text":"装备技能:","State Resist Text":"状态免疫:","Learn Skill Text":"习得技能:","Discover Date Text":"Discovered:","Unknown Date Text":"Unknown","Subcategory All Text":"All","Custom Sketch Header Text":"图鉴","Custom Description Header Text":"描述","Actor Info Header Text":"Info","Actor Stat Header Text":"Stats","Actor Trait Header Text":"Effects","Actor Note Header Text":"Notes","State Info Header Text":"信息","State Trait Header Text":"特性","State Note Header Text":"备注","Skill Info Header Text":"信息","Skill Trait Header Text":"特性","Skill Description Header Text":"描述","Skill Note Header Text":"备注","Weapon Info Header Text":"信息","Weapon Stat Header Text":"能力值","Weapon Trait Header Text":"特性","Weapon Description Header Text":"描述","Weapon Note Header Text":"备注","Armor Info Header Text":"信息","Armor Stat Header Text":"能力值","Armor Trait Header Text":"特性","Armor Description Header Text":"描述","Armor Note Header Text":"备注","Item Info Header Text":"信息","Item Effect Header Text":"效果","Item Description Header Text":"描述","Item Note Header Text":"备注","Bestiary Stats Header Text":"能力值","Bestiary Drops Header Text":"掉落","Bestiary Sketch Header Text":"图鉴","Bestiary Skills Header Text":"Skills","Bestiary Note Header Text":"备注","Purchase Confirm Text":"Purchase","Purchase Cancel Text":"Cancel","Purchase Window Text":"Purchase entry for %price \\g?","Date Format":"0","Integration Options":"","Show Difficulty Mods":"true","Kill Count Text":"Defeated:"}},
{"name":"Fomar0153_IndividualTurnBattleSystem (1)","status":false,"description":"Implements a battle system where your action takes place straight after your input.","parameters":{"Battle Turn Order Formula":"this.agi + Math.randomInt(this.agi / 2)","Use Party Command Window":"true","Add Pass to Party Command Window":"true","Pass Command Name":"跳過"}}
];
