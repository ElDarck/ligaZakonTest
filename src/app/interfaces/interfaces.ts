export interface Files {
  ID: string,
  title: string,
  description: string,
  date: string,
  link: string,
  isTop: boolean,
  commentsCount: number,
  viewCount: number,
  tags: [
    {
      title: string,
      url: string,
      id: string,
    }
  ],
    image: string,
    imageSource: string,
    imageSmall: string,
    imageMiddle: string
}
