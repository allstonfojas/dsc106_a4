var text = 'LaurenceFishburne Carrie-AnneMoss HugoWeaving RayAnthony ChristineAnu AndyArness AlimaAshton-Sheibu MaryAlice TanveerK.Atwal HelmutBakaitis KateBeahan MichaelNyqvist AlfieAllen WillemDafoe RiccardoScamarcio IanMcShane RubyRose HalleBerry IanMcShane LaurenceFishburne RobLowe CynthiaGibb PatrickSwayze EdLauter LaurenceFishburne Carrie-AnneMoss HugoWeaving RayAnthony ChristineAnu AndyArness AlimaAshton-Sheibu MaryAlice TanveerK.Atwal HelmutBakaitis KateBeahan MichaelNyqvist AlfieAllen WillemDafoe RiccardoScamarcio IanMcShane RubyRose HalleBerry IanMcShane LaurenceFishburne RobLowe CynthiaGibb PatrickSwayze GeorgeFinnAlexWinter GeorgeCarlin TerryCamilleri AlexWinter GeorgeCarlin WilliamSadler AmyStoch PatrickSwayze GaryBusey JamesLeGros GaryOldman WinonaRyder AnthonyHopkins KennethBranagh EmmaThompson DenzelWashington KateBeckinsale MichaelKeaton SandraBullock DennisHopper JeffDaniels AlanRuck MarkGordon RachelWeisz TildaSwinton PeterStormare ShiaLaBeouf GavinRossdale DjimonHounsou JenniferConnelly JadenSmith KathyBates JonHamm JohnCleese KyleChandler HiroyukiSanada KoShibasaki RinkoKikuchi TadanobuAsano JordanPeele Keegan-MichaelKey TiffanyHaddish MethodMan WillForte TomHanks TimAllen TonyHale AnniePotts Keegan-MichaelKey JordanPeele';
var lines = text.split(/[,\. ]+/g),
    data = Highcharts.reduce(lines, function (arr, word) {
        var obj = Highcharts.find(arr, function (obj) {
            return obj.name === word;
        });
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);

Highcharts.chart('container2', {
    series: [{
        type: 'wordcloud',
        data: data,
        name: 'Occurrences'
    }],
    title: {
        text: 'Word Cloud of Actors Who Have Worked With Keanu Reeves'
    }
});


var text = "Thomas A. Anderson   man living two lives. By day   an average computer programmer   night  hacker known  Neo. Neo  always questioned  reality,   truth  far beyond  imagination. Neo finds himself targeted   police    contacted  Morpheus,  legendary computer hacker branded  terrorist   government. Morpheus awakens Neo   real world,  ravaged wasteland where most  humanity have been captured   race  machines  live off   humans' body heat  electrochemical energy   imprison  minds within an artificial reality known   Matrix.   rebel against  machines, Neo must return   Matrix  confront  agents: super-powerful computer programs devoted  snuffing out Neo   entire human rebellion. Six months after  events depicted  The Matrix, Neo  proved  be  good omen   free humans,  more  more humans  being freed   matrix  brought  Zion,  one  only stronghold   Resistance. Neo himself  discovered  superpowers including super speed, ability  see  codes   things inside  matrix,   certain degree  precognition. But  nasty piece  news hits  human resistance: 250,000 machine sentinels  digging  Zion  would reach   72 hours.  Zion prepares   ultimate war, Neo, Morpheus  Trinity  advised   Oracle  find  Keymaker  would help  reach  Source. Meanwhile Neo's recurrent dreams depicting Trinity's death have got  worried   if  was not enough, Agent Smith  somehow escaped deletion,  become more powerful than before   chosen Neo   next target. Neo discovers  somehow   able  use  powers   real world too    mind can be freed   body,   result  which  finds himself trapped   train station between  Matrix   Real World. Meanwhile, Zion  preparing   oncoming war   machines  very little chances  survival. Neo's associates set out  free   The Merovingian since 's believed     One  will end  war between humans   machines. What  do not know   there   threat   third party, someone   plans  destroy both  worlds. An ex-hit-man comes out  retirement  track down  gangsters  killed  dog  took everything  . After returning   criminal underworld  repay  debt, John Wick discovers   large bounty  been put   life. John Wick    run after killing  member   international assassin's guild,    $14 million price tag   head,    target  hit men  women everywhere. A skilled young hockey prospect hoping  attract  attention  professional scouts  pressured  show   can fight if challenged during  stay   Canadian minor hockey town. His -ice activities  complicated   relationship   coach's daughter. Bill Alex Winter  Ted Keanu Reeves  high school buddies starting  band. However,   about  fail  history class, which means Ted would be sent  military school. They receive help  Rufus George Carlin,  traveler   future where  band   foundation   perfect society. With  use  Rufus' time machine, Bill  Ted travel  various points  history, returning  important figures  help  complete  final history presentation. Amiable slackers Bill Alex Winter  Ted Keanu Reeves  once again roped into  fantastical adventure  De Nomolos Joss Ackland,  villain   future, sends evil robot duplicates   two lads  terminate  replace . The robot doubles actually succeed  killing Bill  Ted,   two  determined  escape  afterlife, challenging  Grim Reaper William Sadler   series  games  order  return   land   living. After  string  bizarre bank robberies  Southern California,   crooks donning masks  various former presidents,  federal agent, Johnny Utah Keanu Reeves, infiltrates  suspected gang. But this  no ordinary group  robbers. They're surfers -- led   charismatic Bodhi Patrick Swayze --   addicted   rush  thievery. But  Utah falls  love   female surfer, Tyler Lori Petty,   close   gang,  complicates  sense  duty. Count Dracula,  15th-century prince,  condemned  live off  blood   living  eternity. Young lawyer Jonathan Harker  sent  Dracula's castle  finalise  land deal,    Count sees  photo  Harker's fiancée, Mina,  spitting image   dead wife,  imprisons   sets off  London  track her down. In this Shakespearean farce, Hero Kate Beckinsale  her groom--be, Claudio Robert Sean Leonard, team up  Claudio's commanding officer, Don Pedro Denzel Washington,  week before  wedding  hatch  matchmaking scheme. Their targets  sharp-witted duo Benedick Kenneth Branagh  Beatrice Emma Thompson --  tough task indeed, considering  corresponding distaste  love  each other. Meanwhile, meddling Don John Keanu Reeves plots  ruin  wedding. Los Angeles police officer Jack Keanu Reeves angers retired bomb squad member Howard Payne Dennis Hopper  foiling  attempt at taking hostages. In revenge, Payne arms  bus   bomb  will explode if  drops below 50 miles per hour. With  help  spunky passenger Annie Sandra Bullock, Jack   partner Harry Jeff Daniels try  save  people   bus before  bomb goes off, while also trying  figure out how Payne  monitoring .   suicide survivor, demon hunter John Constantine Keanu Reeves  literally been  hell  back --   knows    dies, 's got  one-way ticket  Satan's realm unless  can earn enough goodwill  climb God's stairway  heaven. While helping policewoman Angela Dodson Rachel Weisz investigate her identical twin's apparent suicide, Constantine becomes caught up   supernatural plot involving both demonic  angelic forces. Based   DC/Vertigo 'Hellblazer' comics. Klaatu Keanu Reeves, an extraterrestrial visitor  planet Earth, becomes  herald  upheaval   global scale.   world's governments  scientists race  understand what  happening  how  stop , Dr. Helen Benson Jennifer Connelly  her stepson come  understand  chilling ramifications behind Klaatu's statement     'friend   Earth.' In feudal Japan, Lord Asano rules  province  fairness. However, jealous Lord Kira Tadanobu Asano fears   shogun favors Asano over   hatches  plot  ends  Asano's ritual suicide. After Asano's death,  samurai, led  Oishi Hiroyuki Sanada,  forced  live  outcasts. Oishi wanders  several years  realizes   must turn  Kai Keanu Reeves,  mixed-blood warrior  once rejected,  help    ronin comrades take revenge  Lord Kira. Recently dumped   girlfriend, slacker Rell Jordan Peele finds some happiness   cute kitten winds up   doorstep. After  heartless thief steals  cat, Rell recruits  cousin Clarence Keegan-Michael Key  help  retrieve . They soon learn   thug named Cheddar Method Man   animal,  'll only give  back if  two men agree  work  . Armed  guns   gangster attitude,  doesn't take long   hapless duo  land  big trouble. Woody, Buzz Lightyear   rest   gang embark   road trip  Bonnie   new toy named Forky. The adventurous journey turns into an unexpected reunion  Woody's slight detour leads    long-lost friend Bo Peep.  Woody  Bo discuss  old days,  soon start  realize  're worlds apart   comes  what  want  life   toy.";
var lines = text.split(/[,\. ]+/g),
    data2 = Highcharts.reduce(lines, function (arr, word) {
        var obj = Highcharts.find(arr, function (obj) {
            return obj.name === word;
        });
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);

Highcharts.chart('container3', {
    series: [{
        type: 'wordcloud',
        data: data2,
        name: 'Occurrences'
    }],
    title: {
        text: "Word Cloud of Plot Summaries of Keanu Reeves' Movies"
    }
});
