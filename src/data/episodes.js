/* =========================================================================
   Episode index. `idx` is the global episode number across the whole series.
   Book One = 1..20, Book Two = 21..40, Book Three = 41..61.
   ========================================================================= */

window.ATLA = window.ATLA || {};

window.ATLA.books = [
  { id: 1, name: 'Book One', element: 'water', subtitle: 'Water' },
  { id: 2, name: 'Book Two', element: 'earth', subtitle: 'Earth' },
  { id: 3, name: 'Book Three', element: 'fire', subtitle: 'Fire' }
];

window.ATLA.episodes = [
  { id: '1x01', idx: 1,  book: 1, num: 1,  title: 'The Boy in the Iceberg',
    logline: 'Two siblings fishing off the southern ice crack open a hundred-year-old iceberg and find a twelve-year-old airbender inside it. He does not mention what he is, and a Fire Nation prince three years into an impossible hunt sees the light go up.' },

  { id: '1x02', idx: 2,  book: 1, num: 2,  title: 'The Avatar Returns',
    logline: 'Sokka banishes Aang for the flare; Zuko\'s ship comes through the ice wall hours later. Aang surrenders himself to spare the village, and the sea comes up around him in a way nobody in the world has seen for a century.' },

  { id: '1x03', idx: 3,  book: 1, num: 3,  title: 'The Southern Air Temple',
    logline: 'Aang goes home certain his people survived, and finds Fire Nation armour in the courtyard and Monk Gyatso\'s skeleton in a tent. Elsewhere, a commander named Zhao decides a banished prince is in his way.' },

  { id: '1x04', idx: 4,  book: 1, num: 4,  title: 'The Warriors of Kyoshi',
    logline: 'On an island that has spent four centuries worshipping a past Avatar, fame goes straight to Aang\'s head — and Zuko burns the village down looking for him. Sokka is comprehensively beaten by a girl and handles it better than anyone expects.' },

  { id: '1x05', idx: 5,  book: 1, num: 5,  title: 'The King of Omashu',
    logline: 'A mad king holds Katara and Sokka hostage under creeping crystal and sets Aang three challenges that cannot be solved the way they are presented. The king turns out to be a hundred-and-twelve-year-old friend.' },

  { id: '1x06', idx: 6,  book: 1, num: 6,  title: 'Imprisoned',
    logline: 'Katara has herself arrested to reach an offshore rig full of earthbenders who have been kept away from earth long enough to stop believing they are benders. Getting them their fight back costs her the last thing she has of her mother.' },

  { id: '1x07', idx: 7,  book: 1, num: 7,  title: 'Winter Solstice, Part 1: The Spirit World',
    logline: 'A burned forest, a village losing people to a spirit at sunset, and Aang crossing into the Spirit World without the faintest idea how he did it. Iroh, meanwhile, gets himself captured in a hot spring.' },

  { id: '1x08', idx: 8,  book: 1, num: 8,  title: 'Winter Solstice, Part 2: Avatar Roku',
    logline: 'Aang runs a Fire Nation blockade to reach a temple on Crescent Island and speak to his own previous life. Roku gives him the deadline that reorganises the entire series: Sozin\'s Comet, at the end of summer.' },

  { id: '1x09', idx: 9,  book: 1, num: 9,  title: 'The Waterbending Scroll',
    logline: 'Aang picks up in three tries what took Katara years alone on the ice, and she steals a scroll from pirates rather than fall further behind. Zuko finds her mother\'s necklace useful.' },

  { id: '1x10', idx: 10, book: 1, num: 10, title: 'Jet',
    logline: 'A charming freedom fighter with a grief exactly like Katara\'s turns out to be willing to drown a valley of civilians to hurt the Fire Nation. Sokka is the only one who sees it, and nobody listens to him.' },

  { id: '1x11', idx: 11, book: 1, num: 11, title: 'The Great Divide',
    logline: 'Two refugee tribes, one canyon, a guide with two broken arms, and a hundred-year feud built on a grudge nobody alive remembers properly. Aang ends it by making up a better story.' },

  { id: '1x12', idx: 12, book: 1, num: 12, title: 'The Storm',
    logline: 'In the same weather, Aang tells Katara why he ran from the Air Temples and Iroh tells Zuko\'s crew how the prince got his scar. Both stories are about a boy and the adult who failed to protect him.' },

  { id: '1x13', idx: 13, book: 1, num: 13, title: 'The Blue Spirit',
    logline: 'Zhao\'s Yuyan archers take Aang alive, and a masked swordsman with two dao and no firebending cuts him out of the fortress. Aang gets a look at the face under the mask and asks the obvious question.' },

  { id: '1x14', idx: 14, book: 1, num: 14, title: 'The Fortuneteller',
    logline: 'A village that runs entirely on prophecy will not evacuate an erupting volcano, because Aunt Wu said it was safe. Aang tries to make a prediction about Katara come true by hand.' },

  { id: '1x15', idx: 15, book: 1, num: 15, title: 'Bato of the Water Tribe',
    logline: 'A wounded warrior brings word of Hakoda, and a map to where he is. Aang hides it, because he can feel his family choosing another one.' },

  { id: '1x16', idx: 16, book: 1, num: 16, title: 'The Deserter',
    logline: 'A firebending master who walked away from the army teaches Aang exactly one lesson, about restraint, and Aang decides he is ready before he is. Katara\'s hands are in the way, and then Katara discovers something about her own bending.' },

  { id: '1x17', idx: 17, book: 1, num: 17, title: 'The Northern Air Temple',
    logline: 'Aang goes looking for airbenders and finds Earth Kingdom refugees who have bolted machinery onto his people\'s monastery — and an engineer paying for their safety in Fire Nation weapons. Sokka finds out what he is actually good at.' },

  { id: '1x18', idx: 18, book: 1, num: 18, title: 'The Waterbending Master',
    logline: 'The Northern Water Tribe at last, and a master who will not teach a girl. Katara challenges him in front of the entire tribe; Zhao takes Zuko\'s command and then his ship.' },

  { id: '1x19', idx: 19, book: 1, num: 19, title: 'The Siege of the North, Part 1',
    logline: 'Zhao\'s fleet fills the horizon, Aang admits that being one kid is not going to be enough, and goes into the Spirit World for help — leaving his body on the grass while Zuko comes up through a tunnel underneath the city.' },

  { id: '1x20', idx: 20, book: 1, num: 20, title: 'The Siege of the North, Part 2',
    logline: 'Koh the Face Stealer, a fish in a bag, a moon going out, and the Ocean Spirit rising out of the harbour with the Avatar inside it. Everyone in the North pays something for this one.' },

  /* ---------------------------------------------------------------- Book Two */

  { id: '2x01', idx: 21, book: 2, num: 1,  title: 'The Avatar State',
    logline: 'An Earth Kingdom general decides the fastest way to win the war is to trigger the Avatar State on demand, whatever it takes. Meanwhile a letter from home calls Zuko and Iroh back, and it is not from their father.' },

  { id: '2x02', idx: 22, book: 2, num: 2,  title: 'The Cave of Two Lovers',
    logline: 'A group of wandering nomads, a labyrinth that only opens for people who trust love, and two badgermoles who like music. Iroh poisons himself with tea and is nursed by a girl with a burn scar of her own.' },

  { id: '2x03', idx: 23, book: 2, num: 3,  title: 'Return to Omashu',
    logline: 'Omashu has fallen and been renamed New Ozai. Azula collects the two friends who will make her unbeatable, and Bumi explains why he surrendered without a fight.' },

  { id: '2x04', idx: 24, book: 2, num: 4,  title: 'The Swamp',
    logline: 'A tornado drops the group into a swamp where each of them sees someone they have lost — or, in Aang\'s case, someone he has not met yet. A waterbender living in the trees explains that everything is one thing.' },

  { id: '2x05', idx: 25, book: 2, num: 5,  title: 'Avatar Day',
    logline: 'A town that burns the Avatar in effigy every year puts Aang on trial for a murder Avatar Kyoshi committed four hundred years ago. Sokka and Katara go looking for evidence; Kyoshi gives her own testimony.' },

  { id: '2x06', idx: 26, book: 2, num: 6,  title: 'The Blind Bandit',
    logline: 'Aang finds his earthbending teacher in an underground wrestling ring in Gaoling — a twelve-year-old blind girl fighting under a false name, with parents who believe she is helpless.' },

  { id: '2x07', idx: 27, book: 2, num: 7,  title: 'Zuko Alone',
    logline: 'No Avatar, no uncle, no ship. Zuko crosses the Earth Kingdom by himself and is taken in by a farming family, while the flashbacks assemble the family he came from: his mother, his sister, a dead cousin, and a throne.' },

  { id: '2x08', idx: 28, book: 2, num: 8,  title: 'The Chase',
    logline: 'Azula runs the group to exhaustion across half a province in a machine that never stops, and everyone ends up in the same abandoned town at the same time. Six benders, one standoff, one bolt of lightning.' },

  { id: '2x09', idx: 29, book: 2, num: 9,  title: 'Bitter Work',
    logline: 'Toph teaches earthbending the way she learned it, which does not work on Aang. Iroh teaches Zuko how to take a lightning strike and pass it through his body, and then refuses to be the one who fires it.' },

  { id: '2x10', idx: 30, book: 2, num: 10, title: 'The Library',
    logline: 'A spirit library buried in the desert, guarded by an owl who does not like humans and has met a lot of them. Sokka finds a burnt scrap of paper with a date on it, and it changes the whole shape of the war.' },

  { id: '2x11', idx: 31, book: 2, num: 11, title: 'The Desert',
    logline: 'Appa is gone, and Aang is not handling it. Toph cannot see, Sokka drinks the cactus juice, and Katara is the only one left holding the group together across a desert with no water.' },

  { id: '2x12', idx: 32, book: 2, num: 12, title: 'The Serpent\'s Pass',
    logline: 'A refugee route along a cliff over a lake with something living in it, Suki back in the story, and a baby born on the far side. Zuko and Iroh take the ferry, and meet a boy they last saw in a forest.' },

  { id: '2x13', idx: 33, book: 2, num: 13, title: 'The Drill',
    logline: 'A Fire Nation drill the size of a small town is grinding through the outer wall of Ba Sing Se, and the only way to stop it is from inside. Sokka builds the plan; Ty Lee turns out to be a serious problem.' },

  { id: '2x14', idx: 34, book: 2, num: 14, title: 'City of Walls and Secrets',
    logline: 'Inside the wall, nobody is allowed to mention the war. A cheerful guide with a fixed smile, a secret police force in stone gloves, and a Grand Secretariat who runs the city while the king feeds his bear.' },

  { id: '2x15', idx: 35, book: 2, num: 15, title: 'Tales of Ba Sing Se',
    logline: 'Six short stories, one day, one city: a spa, a picnic, a zoo, a haiku duel, a first date, and an old man on a hill singing to a son who is not there.' },

  { id: '2x16', idx: 36, book: 2, num: 16, title: 'Appa\'s Lost Days',
    logline: 'The month Appa spent alone, told entirely from his side: sandbenders, a circus, a boar-q-pine, the Kyoshi Warriors, a guru at the Eastern Air Temple, and a whistle in the dark at the end of it.' },

  { id: '2x17', idx: 37, book: 2, num: 17, title: 'Lake Laogai',
    logline: 'Jet comes back with a smile that is not his, and the trail leads under a lake to the room where the Dai Li make people forget. Iroh asks Zuko the only two questions that matter.' },

  { id: '2x18', idx: 38, book: 2, num: 18, title: 'The Earth King',
    logline: 'They break into the palace and tell a monarch that there has been a war on for a hundred years and nobody told him. It works — and then three girls in Kyoshi Warrior uniforms walk in through the front door.' },

  { id: '2x19', idx: 39, book: 2, num: 19, title: 'The Guru',
    logline: 'A guru at the Eastern Air Temple offers Aang mastery of the Avatar State at a price he will not pay. Toph is locked in a metal box, Sokka finds his father, and Katara recognises a face in a tea shop.' },

  { id: '2x20', idx: 40, book: 2, num: 20, title: 'The Crossroads of Destiny',
    logline: 'Zuko and Katara, chained in a cave under Ba Sing Se, almost understand each other. Then everyone arrives at once, Zuko is asked to choose, and Book Two ends with the worst outcome available in every direction.' },

  /* -------------------------------------------------------------- Book Three */

  { id: '3x01', idx: 41, book: 3, num: 1,  title: 'The Awakening',
    logline: 'Aang wakes up three weeks later on a stolen Fire Nation ship with hair, a scar he cannot see, and a world that has been told he is dead. Zuko is home, honoured, and miserable.' },

  { id: '3x02', idx: 42, book: 3, num: 2,  title: 'The Headband',
    logline: 'Hiding in plain sight in the Fire Nation, Aang ends up enrolled in a school and teaches a room of children to dance. Zuko visits his uncle twice and hires a man with a metal arm.' },

  { id: '3x03', idx: 43, book: 3, num: 3,  title: 'The Painted Lady',
    logline: 'A Fire Nation village is being poisoned by a Fire Nation factory, and Katara cannot walk past it. So she becomes a river spirit at night and lies to her own friends about it.' },

  { id: '3x04', idx: 44, book: 3, num: 4,  title: 'Sokka\'s Master',
    logline: 'Surrounded by benders and feeling like the spare part, Sokka talks his way into training with the finest swordmaster in the Fire Nation — who works out what he is almost immediately.' },

  { id: '3x05', idx: 45, book: 3, num: 5,  title: 'The Beach',
    logline: 'Four Fire Nation teenagers are sent on holiday and turn out to be very bad at being people. Around a bonfire, each of them says the true thing, and Azula\'s is the worst one.' },

  { id: '3x06', idx: 46, book: 3, num: 6,  title: 'The Avatar and the Fire Lord',
    logline: 'How the war started: Roku and Sozin were best friends. Aang gets the story from one side and Zuko gets it from the other, and it turns out they are related.' },

  { id: '3x07', idx: 47, book: 3, num: 7,  title: 'The Runaway',
    logline: 'Toph is running a scam, Katara disapproves, and a wanted poster turns the argument into a real one about mothers. Then the assassin finds them.' },

  { id: '3x08', idx: 48, book: 3, num: 8,  title: 'The Puppetmaster',
    logline: 'An old innkeeper in a village losing people turns out to be the last waterbender taken from the Southern Water Tribe, and to have invented something in prison.' },

  { id: '3x09', idx: 49, book: 3, num: 9,  title: 'Nightmares and Daydreams',
    logline: 'Four days to the invasion and Aang cannot sleep, which is played for laughs until it is not. Zuko takes his seat at his father\'s war table and is perfect at it.' },

  { id: '3x10', idx: 50, book: 3, num: 10, title: 'The Day of Black Sun, Part 1: The Invasion',
    logline: 'Everyone Team Avatar has ever helped turns up in submarines. The eclipse begins on schedule, the plan works perfectly, and the throne room is empty.' },

  { id: '3x11', idx: 51, book: 3, num: 11, title: 'The Day of Black Sun, Part 2: The Eclipse',
    logline: 'Eight minutes underground with the wrong royal, while Zuko walks into a bunker to tell his father exactly what he thinks. The invasion fails and the adults stay behind.' },

  { id: '3x12', idx: 52, book: 3, num: 12, title: 'The Western Air Temple',
    logline: 'Zuko turns up at their camp having rehearsed a speech, and it goes about as badly as it deserves to. Then he kills the assassin he hired, and they have to think about it.' },

  { id: '3x13', idx: 53, book: 3, num: 13, title: 'The Firebending Masters',
    logline: 'Zuko\'s fire has gone weak because he no longer runs on rage, so the two of them go looking for where firebending came from — and find that there are still dragons.' },

  { id: '3x14', idx: 54, book: 3, num: 14, title: 'The Boiling Rock, Part 1',
    logline: 'Sokka goes to break his father out of an inescapable prison in a volcano, and the only person who volunteers to come is the one who used to run this country\'s manhunts.' },

  { id: '3x15', idx: 55, book: 3, num: 15, title: 'The Boiling Rock, Part 2',
    logline: 'A riot, a hostage, and a gondola over boiling water. And then, at the far end of the cable, Azula finds out what her friends actually think of her.' },

  { id: '3x16', idx: 56, book: 3, num: 16, title: 'The Southern Raiders',
    logline: 'Zuko finds the man who killed Katara\'s mother, and takes her to him. Aang argues for forgiveness, Sokka stays out of it, and Katara decides for herself.' },

  { id: '3x17', idx: 57, book: 3, num: 17, title: 'The Ember Island Players',
    logline: 'They watch a play about themselves, performed badly, in front of an audience that cheers for the other side — and it is somehow the most honest anyone is with them all season.' },

  { id: '3x18', idx: 58, book: 3, num: 18, title: 'Sozin\'s Comet, Part 1: The Phoenix King',
    logline: 'Everyone tells Aang he has to kill the Fire Lord and he will not agree to it. Ozai crowns himself Phoenix King, hands Azula the throne, and sets off to burn the Earth Kingdom.' },

  { id: '3x19', idx: 59, book: 3, num: 19, title: 'Sozin\'s Comet, Part 2: The Old Masters',
    logline: 'Four old men in a tent turn out to be a secret society with a Grand Lotus. Iroh refuses the job everyone wants him to take, and a lion turtle gives Aang a fourth option.' },

  { id: '3x20', idx: 60, book: 3, num: 20, title: 'Sozin\'s Comet, Part 3: Into the Inferno',
    logline: 'A coronation nobody attends, an Agni Kai that neither of them should be fighting, an airship fleet, and a boy on a rock refusing to do the thing everyone needs him to do.' },

  { id: '3x21', idx: 61, book: 3, num: 21, title: 'Sozin\'s Comet, Part 4: Avatar Aang',
    logline: 'A rock in the back, a fourth option, and a chain on a grate. The last word of the series is spoken in a tea shop and it is "perfect".' }
];
