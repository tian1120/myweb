export interface ProjectItem {
	id?: number; // 唯一标识符
	title: string
	title_en?: string
	description?: string
	date?: string		//发布日期
	detail?: string //详细页路径
  	url?: string  //上线链接
	tags?: string[]
	cover?: string[]
}
export const projectItems: ProjectItem[] = [
	{
		title: "视频简历",
    title_en: "视频简历",
		date: "2024-02-10",
    detail: "/detail/video-resume/",
    cover: ['/src/assets/projects/cover/视频简历封面.png'],
		tags: ['animation', 'Personal Introduction', 'video resume']
	},
  

];

