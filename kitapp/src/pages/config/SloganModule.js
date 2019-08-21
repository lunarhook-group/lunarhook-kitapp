
import React, {Component} from 'react';
import {AppRegistry,Dimensions,View,Text} from 'react-native';


var sloganshow = new Array
sloganshow.push({contect:"\t“靡不有初，鲜克有终”",name:"《诗经·荡》"})


sloganshow.push({contect:"\t“三十辐，共一毂，当其无，有车之用。埏埴以为器，当其无，有器之用。凿户牖以为室，当其无，有室之用。”\n\t“故有之以为利，无之以为用。”",name:"《道德经》·第十一章"})
sloganshow.push({contect:"\t“天之道，损有余而补不足。人之道，则不然，损不足以奉有余。”",name:"《道德经》·第七十七章"})
sloganshow.push({contect:"\t“圣人自知不自见；自爱不自贵。”",name:"《道德经》·第七十二章"})
sloganshow.push({contect:"\t“大道废，有仁义；智慧出，有大伪；六亲不和，有孝慈；国家昏乱，有忠臣。”",name:"《道德经》·第十八章"})
sloganshow.push({contect:"\t“天地不仁，以万物为刍狗；圣人不仁，以百姓为刍狗。”",name:"《道德经》·第五章"})
sloganshow.push({contect:"\t“希言自然”",name:"《道德经》·第二十三章"})
sloganshow.push({contect:"\t“天道无亲，常与善人。”",name:"《道德经》"})
sloganshow.push({contect:"\t“曲则全，枉则直，洼则盈，敝则新，少则多，多则惑。”",name:"《道德经》"})
sloganshow.push({contect:"\t“人法地，地法天，天法道，道法自然。”",name:"《道德经》"})

sloganshow.push({contect:"\t“君子使物，不为物使。”",name:"《管子·任法》"})
sloganshow.push({contect:"\t“仓廪实则知礼节,衣食足则知荣辱。”",name:"《管子·牧民》"})
sloganshow.push({contect:"\t“先易者后难。”",name:"《管子·任法》"})
sloganshow.push({contect:"\t“天之所助，虽小必大；天之所违，虽成必败。顺天者有其功，逆天者怀其凶，不可复振也。”",name:"《管子·形势》"})
sloganshow.push({contect:"\t“故法者，天下之至道也。”",name:"《管子·任法》"})
sloganshow.push({contect:"\t“国多财则远者来，地辟举则民留处。”",name:"《管子·牧民》"})
sloganshow.push({contect:"\t“礼义廉耻，国之四维，四维不张，国乃灭亡。”",name:"《管子·牧民》"})
sloganshow.push({contect:"\t“欲王天下，而失天之道，天下不可得而王也。”",name:"《管子·形势》"})
sloganshow.push({contect:"\t“能予而无取者，天地之配也”",name:"《管子·形势》"})
sloganshow.push({contect:"\t“闻一言以贯万物，谓之知道。”",name:"《管子·戒》"})
sloganshow.push({contect:"\t“道在天地之间也，其大无外，其小无内。”",name:"《管子·心术上》"})
sloganshow.push({contect:"\t“虚而无形谓之道。”",name:"《管子·心术上》"})
sloganshow.push({contect:"\t“无德无怨，无好无恶，万物崇以，阴阳同度，曰道。”",name:"《管子·正》"})
sloganshow.push({contect:"\t“凡人之生也，天出其精，地出其形，合此以为人。”",name:"《管子·内业》"})
sloganshow.push({contect:"\t“人情不二，故民情可得而御也。”",name:"《管子·权修》"})
sloganshow.push({contect:"\t“得众而不得其心，则与独行者同实。”",name:"《管子·参患》"})
sloganshow.push({contect:"\t“君不君，则臣不臣；父不父，则子不子；上失其位，则下逾其节。”",name:"《管子·形势》"})
sloganshow.push({contect:"\t“海不辞水，故能成其大；山不辞土石，故能成其高；明主不厌人，故能成其众。”",name:"《管子·形势》"})
sloganshow.push({contect:"\t“事者生于虑，成于务，失于傲。不虑则不生，不务则不成，不傲则不失。”",name:"《管子·乘马》"})
sloganshow.push({contect:"\t“千里之路，不可扶以绳。万家之都，不可平以准。”",name:"《管子·宙合》"})
sloganshow.push({contect:"\t“景不为曲物直，响不为恶声美。是以圣人明乎物之性者必以其类来也，故君子绳绳乎慎其所先。”",name:"《管子·宙合》"})
sloganshow.push({contect:"\t“夫兵，虽非备道至德也，然而所以辅王成霸。”",name:"《管子·兵法》"})
sloganshow.push({contect:"\t“观国者观君，观军者观将，观备者观野。”",name:"《管子·霸言》"})
sloganshow.push({contect:"\t“无土而欲富者忧，无德而欲王者危，施薄而求厚者孤。”",name:"《管子·霸言》"})
sloganshow.push({contect:"\t“仁从中出，义从外作”",name:"《管子·戒》"})
sloganshow.push({contect:"\t“不务天时则财不生，不务地利则仓廪不盈。”",name:"《管子》"})
sloganshow.push({contect:"\t“不作无补之功，不为无益之事。”",name:"《管子》"})
sloganshow.push({contect:"\t“圣人畏微，而愚者畏明。”",name:"《管子》"})
sloganshow.push({contect:"\t“天下不患无财，患无人以分之。”",name:"《管子》"})
sloganshow.push({contect:"\t“信不足，安有信。”",name:"《管子》"})

sloganshow.push({contect:"\t“大道之行也，天下为公，选贤与能，讲信修睦”",name:"《礼记·大同篇》"})

sloganshow.push({contect:"\t“老吾老以及人之老，幼吾幼以及人之幼。”",name:"《孟子·梁惠王下》"})
sloganshow.push({contect:"\t“人无廉耻，王法难治”",name:"《孟子·梁惠王下》"})
sloganshow.push({contect:"\t“得道者多助，失道者寡助。寡助之至，亲戚畔之；多助之至，天下顺之。”",name:"《孟子·公孙丑上》"})
sloganshow.push({contect:"\t“天时不如地利，地利不如人和。”",name:"《孟子·公孙丑上》"})
sloganshow.push({contect:"\t“富贵不能淫，贫贱不能移，威武不能屈。此之谓大丈夫。”",name:"《孟子·公孙丑上》"})
sloganshow.push({contect:"\t“人有不为也，而后可以有为。”",name:"《孟子·离娄上》"})
sloganshow.push({contect:"\t“君子以仁存心，以礼存心。仁者爱人，有礼者敬人。爱人者人恒爱之，敬人者人恒敬之。”",name:"《孟子·离娄上》"})
sloganshow.push({contect:"\t“故天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。”",name:"《孟子·告子上》"})
sloganshow.push({contect:"\t“生，亦我所欲也。义，亦我所欲也；二者不可得兼，舍生而取义者也。”",name:"《孟子·告子上》"})
sloganshow.push({contect:"\t“民为贵，社稷次之，君为轻。”",name:"《孟子·告子上》"})
sloganshow.push({contect:"\t“生于忧患，死于安乐。”",name:"《孟子·告子上》"})
sloganshow.push({contect:"\t“得道多助，失道寡助”",name:"《孟子·告子上》"})
sloganshow.push({contect:"\t“穷则独善其身，达则兼善天下。”",name:"《孟子·尽心上》"})
sloganshow.push({contect:"\t“尽信书，不如无书。”",name:"《孟子·尽心上》"})
sloganshow.push({contect:"\t“一叶蔽目，不见泰山。”",name:"《孟子·尽心上》"})

sloganshow.push({contect:"\t“德不孤，必有邻。”",name:"《论语·里仁》"})
sloganshow.push({contect:"\t“过而不改，是谓过已。”",name:"《论语·卫灵公》"})
sloganshow.push({contect:"\t“巧言令色，鲜矣仁。”",name:"《论语·学而》"})
sloganshow.push({contect:"\t“见贤思齐焉，见不贤而内自省也。”",name:"《论语·里仁》"})
sloganshow.push({contect:"\t“自古皆有死，民无信不立。”",name:"《论语·颜渊》"})
sloganshow.push({contect:"\t“君子不以言举人，不以人废言。”",name:"《论语·卫灵公》"})
sloganshow.push({contect:"\t“君子喻于义，小人喻于利。”",name:"《论语·里仁》"})
sloganshow.push({contect:"\t“君子不器。”",name:"《论语·为政》"})
sloganshow.push({contect:"\t“温故而知新，可以为师矣。”",name:"《论语·为政》"})
sloganshow.push({contect:"\t“朝闻道，夕死可矣。”",name:"《论语·里仁》"})
sloganshow.push({contect:"\t“名不正，则言不顺；言不顺，则事不成。”",name:"《论语·子路》"})
sloganshow.push({contect:"\t“人而无信，不知其可也。”",name:"《论语·为政》"})
sloganshow.push({contect:"\t“过也，人皆见之；更也，人皆仰之。”",name:"《论语·子张》"})
sloganshow.push({contect:"\t“其身正，不令而行；其身不正，虽令不从。”",name:"《论语·子路》"})
sloganshow.push({contect:"\t“不患寡而患不均，不患贫而患不安。”",name:"《论语·季氏》"})
sloganshow.push({contect:"\t“工欲善其事，必先利其器。”",name:"《论语·卫灵公》"})
sloganshow.push({contect:"\t“君子成人之美，不成人之恶。”",name:"《论语·颜渊》"})
sloganshow.push({contect:"\t“士不可以不弘毅，任重而道远。”",name:"《论语·泰伯》"})
sloganshow.push({contect:"\t“己欲立而立人，己欲达而达人。”",name:"《论语·雍也》"})
sloganshow.push({contect:"\t“往者不可谏，来者犹可追。”",name:"《论语·微子》"})
sloganshow.push({contect:"\t“工欲善其事，必先利其器。”",name:"《论语·卫灵公》"})

sloganshow.push({contect:"\t“非淡泊无以明志，非宁静无以致远”",name:"诸葛亮《诫子书》"})

sloganshow.push({contect:"\t“千磨万击还坚劲，任尔东南西北风”",name:"郑燮《竹石》"})

sloganshow.push({contect:"\t“有志者、事竟成，破釜沉舟，百二秦关终属楚”\t“苦心人、天不负，卧薪尝胆，三千越甲可吞吴”",name:"胡寄恒"})




module.exports=sloganshow;  