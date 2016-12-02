console.log('Loaded YouTube Videos');
console.log('Last updated: 2016-12-01 22:19:16');
var timestamp = '2016-12-01 22:19:16';
var videoCount = 0;
var videoData = [
  {
    "title": "Gaby Moreno - Entrevista en Español por Princeton Tonight",
    "imgURL": "https://i.ytimg.com/vi/GRNHCLwN-yU/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=cvHIkhYu8U-BjrCuS4A0EipQlU4",
    "url": "https://www.youtube.com//watch?v=GRNHCLwN-yU",
  },
  {
    "title": "Season 2 Premiere - Princeton Tonight",
    "imgURL": "https://i.ytimg.com/vi/g912gpkct1o/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=TGn8TE97RHhwNK-WHFOLdx92w58",
    "url": "https://www.youtube.com//watch?v=g912gpkct1o",
  },
  {
    "title": "John Caglione Jr. - Princeton Tonight",
    "imgURL": "https://i.ytimg.com/vi/KHhgxXMQOEA/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=DywXV19Cw4eM-nKGw5Y1qKXBjLg",
    "url": "https://www.youtube.com//watch?v=KHhgxXMQOEA",
  },
  {
    "title": "Princeton Tonight Season 1 Finale - Dave Coulier and Lawrence",
    "imgURL": "https://i.ytimg.com/vi/MIMttWB_zN4/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=UJJA9a9N1BMt1YD2e7enCVFf3hI",
    "url": "https://www.youtube.com//watch?v=MIMttWB_zN4",
  },
  {
    "title": "John Caglione Jr. Makeup Demo - Princeton Tonight",
    "imgURL": "https://i.ytimg.com/vi/L7g50LkNNcM/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=KkM0BBmQ2M-XK4APHhd6ue6QaXY",
    "url": "https://www.youtube.com//watch?v=L7g50LkNNcM",
  },
  {
    "title": "Rob Cohen, Colin Gray, and Jordan Salama Play Canadian Celebrity Trivia (ft. Maple Syrup Shots)",
    "imgURL": "https://i.ytimg.com/vi/K4nIal9wZSw/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=KGyccV6vqswM4Hjl5X0K7v2qnaQ",
    "url": "https://www.youtube.com//watch?v=K4nIal9wZSw",
  },
  {
    "title": "Colin Gray is a Hungarian Knight",
    "imgURL": "https://i.ytimg.com/vi/5YRgMkAMmeU/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=SKGnEHzFHdAsRgadKyYsT2cezdY",
    "url": "https://www.youtube.com//watch?v=5YRgMkAMmeU",
  },
  {
    "title": "Rob Cohen and Colin Gray Met So Many Famous Canadians",
    "imgURL": "https://i.ytimg.com/vi/zWxHNIYxlUA/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=9axK8xCYGTH0tP6yUtb8eKUG3r8",
    "url": "https://www.youtube.com//watch?v=zWxHNIYxlUA",
  },
  {
    "title": "Rob Cohen is 'Milhouse' from The Simpsons",
    "imgURL": "https://i.ytimg.com/vi/eP61JvWa8Kg/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=5z0Liq5o2nq36AaAfIw7I9OYy7U",
    "url": "https://www.youtube.com//watch?v=eP61JvWa8Kg",
  },
  {
    "title": "Being Canadian was a Risky (But Hilarious) Movie",
    "imgURL": "https://i.ytimg.com/vi/7o4manvrIKg/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=zPw4bRX3f9hX1uwk7MLGU9_Vn2c",
    "url": "https://www.youtube.com//watch?v=7o4manvrIKg",
  },
  {
    "title": "Rob and Colin Visited Canada's Top Secret Maple Syrup Reserve",
    "imgURL": "https://i.ytimg.com/vi/zojil4W6sk8/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=pesxfWtEXSMcivhPo0Stl7pNMnQ",
    "url": "https://www.youtube.com//watch?v=zojil4W6sk8",
  },
  {
    "title": "Khalil Muhammad UNCUT - Princeton Tonight Interview",
    "imgURL": "https://i.ytimg.com/vi/QJ_CYpKl43U/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=-GX-UT_f0yyD99frt4XiMkAeg6Y",
    "url": "https://www.youtube.com//watch?v=QJ_CYpKl43U",
  },
  {
    "title": "These are Good Things - Full Frontal with Samantha Bee",
    "imgURL": "https://i.ytimg.com/vi/iAx_BQISOLA/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=-j-pSf4jNadwmM96_sNOvJhEWao",
    "url": "https://www.youtube.com//watch?v=iAx_BQISOLA",
  },
  {
    "title": "These are Good Things - Omelets",
    "imgURL": "https://i.ytimg.com/vi/RW5avLTzmtQ/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=dnVA3S4Nm0rk1T3SybP-bDzG9Nc",
    "url": "https://www.youtube.com//watch?v=RW5avLTzmtQ",
  },
  {
    "title": "Emmanuel Udotong Discusses The Releaf Group - Princeton Tonight Interview",
    "imgURL": "https://i.ytimg.com/vi/T12Rr7NpmUQ/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=MWR437vfy180AeRp9hxhbHcS1-4",
    "url": "https://www.youtube.com//watch?v=T12Rr7NpmUQ",
  },
  {
    "title": "Cinnamon Bun Oreos - These Are Good Things",
    "imgURL": "https://i.ytimg.com/vi/W9iG4xaGPbM/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=AWYF41Fc-1Jq6nfuYUCyFUIMpc8",
    "url": "https://www.youtube.com//watch?v=W9iG4xaGPbM",
  },
  {
    "title": "Billy Joel Invited Mike DelGuidice to Join His Band",
    "imgURL": "https://i.ytimg.com/vi/xkoK-YFWAO4/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=Uf3JUZXOpXuwdydVNs3MNU5UQ8I",
    "url": "https://www.youtube.com//watch?v=xkoK-YFWAO4",
  },
  {
    "title": "Mike DelGuidice Opened for Billy Joel at the Nassau Coliseum",
    "imgURL": "https://i.ytimg.com/vi/1RtaodqTyyU/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=pL4k2e5cjLY_xu28Mobl4dzng20",
    "url": "https://www.youtube.com//watch?v=1RtaodqTyyU",
  },
  {
    "title": "Princeton Tonight S01E01 - Mike DelGuidice",
    "imgURL": "https://i.ytimg.com/vi/SXPdYRXzmY4/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=5e0EL1vtbcihOMWBQZ3DI5ojty4",
    "url": "https://www.youtube.com//watch?v=SXPdYRXzmY4",
  },
  {
    "title": "Princeton Tonight Premiere Promo 2",
    "imgURL": "https://i.ytimg.com/vi/wtH6sCr0sog/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=2Dog_IIganbx8CKS6gd6o4yXCtw",
    "url": "https://www.youtube.com//watch?v=wtH6sCr0sog",
  },
  {
    "title": "'Blackbird' - Mike DelGuidice (Princeton Tonight)",
    "imgURL": "https://i.ytimg.com/vi/tCk__GMHFIY/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=WyNHJmczWkmRFNtyBsvleMkPB0E",
    "url": "https://www.youtube.com//watch?v=tCk__GMHFIY",
  },
]
