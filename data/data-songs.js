class Track {
  character;
  name;
  imageSrc;
  length;
  trackInfo;
  youtubeLink;

  constructor(trackInfo) {
    this.character = trackInfo.character
    this.name = trackInfo.name;
    this.imageSrc = trackInfo.imageSrc;
    this.length = trackInfo.length;
    this.trackInfo = trackInfo.trackInfo;
    this.youtubeLink = trackInfo.youtubeLink;
  }
}

export const tracks = [{
  character: 'Yui',
  name: 'Guitar ni Kubittake',
  imageSrc: '/k-on-site/portraits-track/Yui-track-1.jpg',
  length: '3:34',
  trackInfo: '<i>This track is from Yui Hirasawa character album</i>',
  youtubeLink: 'https://youtu.be/fJoArDfRtqM?si=YAqwthtQWzKi6tB7'
}, {
  character: 'Yui',
  name: 'Sunday Siesta',
  imageSrc: '/k-on-site/portraits-track/Yui-track-1.jpg',
  length: '3:38',
  trackInfo: '<i>This track is from Yui Hirasawa character album</i>',
  youtubeLink: 'https://youtu.be/rpHW0Cy1K10?si=7ImbQDOKY6o_qiQy'
}, {
  character: 'Yui',
  name: 'Cagayake! Girls',
  imageSrc: '/k-on-site/portraits-track/cagayake-girls.jpg',
  length: '4:11',
  trackInfo: '<i>This track is the opening of the first season</i>',
  youtubeLink: 'https://youtu.be/QqaK9st80F4?si=HKOvm8r2uWq70B0O'

}, {
  character: 'Yui',
  name: 'Utauyo! MIRACLE',
  imageSrc: '/k-on-site/portraits-track/utauyo-miracle.webp',
  length: '4:02',
  trackInfo: '<i>This track is the opening of the third season</i>',
  youtubeLink: 'https://youtu.be/XxN19NmWwP0?si=aRhzxI-KyQxYM7HT'
}, {
  character: 'Yui',
  name: 'Happy!? Sorry!!',
  imageSrc: '/k-on-site/portraits-track/cagayake-girls.jpg',
  length: '3:45',
  trackInfo: '<i>This track is the side b of the first opening</i>',
  youtubeLink: 'https://youtu.be/YvUzKCCyrR4?si=o1lZ8Az-nqidUWFC'
}, {
  character: 'Ritsu',
  name: 'Come with me!!',
  imageSrc: '/k-on-site/portraits-track/Ritsu-track-1.jpg',
  length: '3:30',
  trackInfo: '<i>This track is from the Ritsu Tainaka character album</i>',
  youtubeLink: 'https://youtu.be/pTpeUzUviy8?si=wb0akVdVHQDH4FOi'
}, {
  character: 'Ritsu',
  name: 'Mezase Happy 100%↑↑↑',
  imageSrc: '/k-on-site/portraits-track/Ritsu-track-1.jpg',
  length: '3:13',
  trackInfo: '<i>This track is from the Ritsu Tainaka character album</i>',
  youtubeLink: 'https://youtu.be/0hGAmRx_Bhg?si=vLu2Rr7yiIFFhp_r'
}, {
  character: 'Ritsu',
  name: 'SHINING DRUMMING LIFE',
  imageSrc: '/k-on-site/portraits-track/Ritsu-track-1.jpg',
  length: '3:28',
  trackInfo: '<i>This track is from the Ritsu Tainaka character album</i>',
  youtubeLink: 'https://youtu.be/CXgzsmlyRJk?si=Y6ex1c34tPpBCwub'
}, {
  character: 'Mio',
  name: "Don't say lazy",
  imageSrc: '/k-on-site/portraits-track/Mio-don\'t-say-lazy.webp',
  length: '4:25',
  trackInfo: '<i>This track is the ending of the first season</i>',
  youtubeLink: 'https://youtu.be/Wz-pNcgYo0c?si=6_jCyHwZI2Gx9Agt'
}, {
  character: 'Mio',
  name: "Heart Goes Boom",
  imageSrc: '/k-on-site/portraits-track/Mio-track-1.jpg',
  length: '3:36',
  trackInfo: '<i>This track is from the Mio Akiyama character album</i>',
  youtubeLink: 'https://youtu.be/cw2fwpGSb0Y?si=DS4MCoFMU5VBI37G'
}, {
  character: 'Mio',
  name: "Listen!!",
  imageSrc: '/k-on-site/portraits-track/listen.jpeg',
  length: '3:58',
  trackInfo: '<i>This track is the second ending of the series</i>',
  youtubeLink: 'https://youtu.be/DSINTKQc5BA?si=FxuoWhdKlJt2aJTE'
}, {
  character: 'Mio',
  name: "NO, Thank You!",
  imageSrc: '/k-on-site/portraits-track/no-thank-you.jpeg',
  length: '4:20',
  trackInfo: '<i>This track is the third ending of the series</i>',
  youtubeLink: 'https://youtu.be/sExUuGbLJCg?si=r4ZjO4Cn2vrgXZKi'
}, {
  character: 'Mio',
  name: "Fuwa Fuwa Time",
  imageSrc: '/k-on-site/portraits-track/fuwa-fuwa-time.webp',
  length: '3:55',
  trackInfo: '<i>This track is an alternative version of an insert song from the first season</i>',
  youtubeLink: 'https://youtu.be/xUOZjeDbRbM?si=j2C834aJS1rwnO5C'
}, { 
  character: 'Mugi',
  name: "Humming Bird",
  imageSrc: '/k-on-site/portraits-track/Mugi-track-1.jpeg',
  length: '3:44',
  trackInfo: '<i>This track is from the Tsumugi Kotobuki character album</i>',
  youtubeLink: 'https://youtu.be/5gtI5ihtjwk?si=H1BoDTTM9mrcc2NK'
}, {
  character: 'Mugi',
  name: "Dear My Keys",
  imageSrc: '/k-on-site/portraits-track/Mugi-track-1.jpeg',
  length: '4:34',
  trackInfo: '<i>This track is from the Tsumugi Kotobuki character album</i>',
  youtubeLink: 'https://youtu.be/Bx1AsBscbdM?si=vnES5inWppIPO_99'
}, {
  character: 'Mugi',
  name: "Honey Sweet Tea Time",
  imageSrc: '/k-on-site/portraits-track/Mugi-track-2.jpg',
  length: '4:09',
  trackInfo: '<i>This track is from the Tsumugi Kotobuki character album</i>',
  youtubeLink: 'https://youtu.be/tpDMYQCdiYA?si=Qwp-aMrnGrrePz4m'
}, {
  character: 'Mugi',
  name: "Diary Wa Fortissimo",
  imageSrc: '/k-on-site/portraits-track/Mugi-track-2.jpg',
  length: '3:53',
  trackInfo: '<i>This track is from the Tsumugi Kotobuki character album</i>',
  youtubeLink: 'https://youtu.be/ypXfRdfIT0Y?si=emkvd9BIs-J97W1K'
}, {
  character: 'Mugi',
  name: "Tsubasa wo kudasai",
  imageSrc: '/k-on-site/portraits-track/fuwa-fuwa-time-album-2.webp',
  length: '3:19',
  trackInfo: '<i>This track is from the b side of the fuwa fuwa time single album</i>',
  youtubeLink: 'https://youtu.be/7TYs30lTalE?si=V3VB08175AmWUk-5'
}, { 
  character: 'Azusa',
  name: "Fude pen Boru pen",
  imageSrc: '/k-on-site/portraits-track/Azusa-fude-pen-boru-pen.jpg',
  length: '3:46',
  trackInfo: '<i>This track is an insert song from the second season</i>',
  youtubeLink: 'https://youtu.be/PCmZ45INWYA?si=6ogUiuVYKapCeiVr'
}, {
  character: 'Azusa',
  name: "Jajauma Way To Go",
  imageSrc: '/k-on-site/portraits-track/Azusa-track-1.jpg',
  length: '4:27',
  trackInfo: '<i>This track is from the Azusa Nakano character album</i>',
  youtubeLink: 'https://youtu.be/3wivU0JUpPk?si=eUo29mC3GZe88vNt'
}, {
  character: 'Azusa',
  name: "Watashi wa Watashi no Michi wo Yuku",
  imageSrc: '/k-on-site/portraits-track/Azusa-track-1.jpg',
  length: '3:17',
  trackInfo: '<i>This track is from the Azusa Nakano character album</i>',
  youtubeLink: 'https://youtu.be/ei1qSImYM_g?si=SrexAG8Qr6W8rpO4'
}, {
  character: 'Azusa',
  name: "Joyful Todays",
  imageSrc: '/k-on-site/portraits-track/Azusa-track-1.jpg',
  length: '3:10',
  trackInfo: '<i>This track is from the Azusa Nakano character album</i>',
  youtubeLink: 'https://youtu.be/XDWqV9RPXhc?si=P7sjdoPkT3uT79U-'
}].map((trackDetails) => {
  return new Track (trackDetails);
})

