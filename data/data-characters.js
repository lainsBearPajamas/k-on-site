//here I need to create an array of five different objects. In the array each object will represent a character description stored as JS code that will then be generated on the web page. 

class Character {
  imageSrc;
  name;
  overview;
  personality;
  musicalSkills;

  constructor (characterDetails) {
    this.imageSrc = characterDetails.imageSrc;
    this.name = characterDetails.name;
    this.overview = characterDetails.overview;
    this.personality = characterDetails.personality;
    this.musicalSkills = characterDetails.musicalSkills;
  }
}

export const characters = [{
  imageSrc: '/k-on-site/portraits-main/Yui-main-2.png',
  name: 'Yui Hirasawa',
  overview: "<b>Overview:</b>  Although she is quite clumsy and easily distractible, Yui is a genius-level guitarist. She doesn't know what a tuner is but she can tune her guitar simply by ear, which is a very rare skill among musicians. ",
  personality: "<b>Personality:</b> Her personality is quite talkative and outgoing. She is always quite cheerful and energetic. She has quite a mystical connection with her guitar, which she calls 'Gita'. Yui also gets along with Ritsu really well. They are often seen joking around and playing pranks together.",
  musicalSkills: "<b>Musical Skills:</b> Yui's musical skills are very low at first as she can only play castanets but not guitar. Yet, as the series progress, she becomes a fantastic guitarist easily capable of playing bar chords and soloing at an unmatched level. Many people consider her to be a musical genius and an overall very gifted musician. I personally find her vocals to be inferior to Mio Akiyama's but her guitar skills are indeed impressive!"
}, {
  imageSrc: '/k-on-site/portraits-main/Ritsu-main-3.jpg',
  name: 'Ritsu Tainaka',
  overview: "<b>Overview:</b>  Ritsu is very similar to Yui but a bit more mischievious as she likes pranking Mio with scary things quite often. Her drumming style is quite aggressive and energetic though pretty simple compared to what it could be.",
  personality: "<b>Personality:</b> Much like Yui, Ritsu is also very talkative and outgoing. She is the most energetic member of the band. She can be described as the emotional leader of the band because in times of trouble it is her ability to never give up and remain strong and powerful that glues the band together.",
  musicalSkills: "<b>Musical Skills:</b> Ricchan's musical skills are quite controversial. On the one hand, her style of drumming is simple enough and yet powerful and aggressive enough for K-on's songs to be bangers. On the other hand, there are multiple drum covers of popular Hokago TeaTime's songs in which the drummer performs a much better job at drumming than Ritsu does in the original recordings."
}, {
  imageSrc: '/k-on-site/portraits-main/Mio-main-2.png',
  name: 'Mio Akiyama',
  overview: "<b>Overview:</b>  Well mannered and cute, musically professional, and very memorable. It goes without saying that Mio is HTT's most famous character that has a huge fan club of her own. Her bass skills are godlike and can be considered the best thing about the entire Hokago TeaTime band.",
  personality: "<b>Personality:</b> Mio is calm and rational most of the time. Although she appears to be very formal and serious, deep inside she is quite a scaredy cat. That may be one of the reasons so many people find her to be really cute. Her wise decisions are what makes their band hold together move forward on their musical journey.",
  musicalSkills: "<b>Musical Skills:</b> To call Mio's bass playing skills outstanding is to say nothing. Listeners and musical critics alike consider her magnificent basslines to be the cornerstone of their entire musical band's magic. Her basslines are very groovy in almost every single song. They have a wide variety of different sounds: from the crystal clear sounds of Cagayake! Girls to something really punchy and aggressive like Heart goes boom. "
}, {
  imageSrc: '/k-on-site/portraits-main/Mugi-main-1.png',
  name: 'Tsumugi Kotobuki',
  overview: "<b>Overview:</b>  Rich and and musically gifted, Mugi is another gift of a character in K-on series. Her style of playing the keyboard is truly unique in how it combines something very melodic and groovy with something quite cartoony and sweet.",
  personality: "<b>Personality:</b> Mugi is very calm and noticeably kind. She is very generous and frequently treats her friends to a lot of things. Because she spent most of her life isolated at home with her rich parents she is a bit socially anxious and often gets excited by things other people find really boring in their lives. ",
  musicalSkills: "<b>Musical Skills:</b> In the original series Mugi was like Mozart compared to all the other characters because she was winning musical competitions left and right before joining the club. In their band's records her keyboards are really memorable because they have a truly unique sound to them that changes with every song. Take the dramatic and mysterious tone of Don't say lazy or the groovy and soulful tone of Listen!! for example. Mugi's style of playing is really versatile."
}, {
  imageSrc: '/k-on-site/portraits-main/Azusa-main-1.png',
  name: 'Azusa Nakano',
  overview: "<b>Overview:</b>  Azusa is almost like the opposite side of Yui. She is socially anxious, very formal and serious, and at the same time not as musically gifted and more relying on practice than Yui. Her rhythm guitar provides an additional really cool groovy touch to their songs.  ",
  personality: "<b>Personality:</b> Azusa's personality is quite introverted. She is very shy and socially anxious. Azusa is also really formal and serious like Mio. However, just like Mio she has her own cute side that is noticed by Yui. Although she is serious almost all the time, she is deep inside desiring to be more like Yui in being really easygoing in life.",
  musicalSkills: "<b>Musical Skills:</b> Not really much can be said about Azusa's musical skills. Her rhythm guitar starts appearing a bit later on in the series closer to the second season. Azusa's instrument provides an additional source of groove and completes the HTT's songs in a very cool way with it's light touch. Her style of playing is much more reserved than Yui's."
}].map((characterDetails) => {
  return new Character (characterDetails);
})