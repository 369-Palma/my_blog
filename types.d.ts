type BlogPost = {
    id: string,
    title:string,
    date:string,
    category?: 'story' | 'publication' | 'education' | 'insight'
}