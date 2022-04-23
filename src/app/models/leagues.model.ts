export class Leagues{
	public id: number;
	public name: string;
	public country: string
	public website?: string;
	public description?: string;
	public imgFanart1?: string;
	public imgFanart2?: string;
	public imgFanart3?: string;
	public imgFanart4?: string;
	public imgBanner?: string;
	public imgBadge?: string;
	public imgLogo?: string;
	public imgPoster?: string;

	constructor(
		_id: number,
		_name: string,
		_country: string,
		_website: string,
		_description?: string,
		_imgFanart1?: string,
		_imgFanart2?: string,
		_imgFanart3?: string,
		_imgFanart4?: string,
		_imgBanner?: string,
		_imgBadge?: string,
		_imgLogo?: string,
		_imgPoster?: string
		
		){
		this.id = _id;
		this.name = _name;
		this.country = _country;
		this.website = _website;
		this.description = _description;
		this.imgFanart1 = _imgFanart1;
		this.imgFanart2 = _imgFanart2;
		this.imgFanart3 = _imgFanart3;
		this.imgFanart4 = _imgFanart4;
		this.imgBadge = _imgBadge;
		this.imgLogo = _imgLogo;
		this.imgPoster = _imgPoster;

	}
}