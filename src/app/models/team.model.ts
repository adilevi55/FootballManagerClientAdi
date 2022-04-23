export class Team {
	public id: number;
	public name: string;
	public country: string|null = null;
	
	public formedYear: number|null = null;
	public leagueId: number|null = null;
	public leagueStr: string|null = null;
	public stadiumStr: string|null = null;
	public stadiumThumbStr: string|null = null;
	public stadiumLocation: string|null = null;
	public stadiumCapacity: string|null = null;
	public websiteStr: string|null = null;
	public KitColour1Str: string|null = null
	public KitColour2Str: string|null = null


	public description: string|null = null;
	public strFacebook: string|null = null;
	public strInstagram: string|null = null;

	public imgFanart1: string|null = null;
	public imgFanart2: string|null = null;
	public imgFanart3: string|null = null;
	public imgFanart4: string|null = null;
	public imgBanner: string|null = null;
	public imgBadge: string|null = null;
	public teamJerseyStr: string|null = null;
	public teamLogoStr: string|null = null;

	constructor(
		_id: number,
		_name: string,
		_country: string,
        _formedYear: number,
		_leagueId: number,
		_leagueStr: string,
		_stadiumStr: string,
		_stadiumThumbStr: string,
		_stadiumLocation: string,
		_stadiumCapacity: string, 
		_websiteStr: string,
		_KitColour1Str: string,
		_KitColour2Str: string,
		_description: string,
		_strFacebook: string,
		_strInstagram: string,
		_imgFanart1: string,
		_imgFanart2: string,
		_imgFanart3: string,
		_imgFanart4: string,
		_imgBanner: string,
		_imgBadge: string,
		_teamJerseyStr: string,
		_teamLogoStr: string

	){
		this.id = _id;					
		this.name = _name;
		this.country = _country;
        this.formedYear = _formedYear;
		this.leagueId = _leagueId;
		this.leagueStr = _leagueStr;
		this.stadiumStr = _stadiumStr;
		this.stadiumThumbStr = _stadiumThumbStr;
		this.stadiumLocation = _stadiumLocation;
		this.stadiumCapacity = _stadiumCapacity;
		this.websiteStr = _websiteStr;
		this.KitColour1Str = _KitColour1Str;
		this.KitColour2Str = _KitColour2Str;
		this.description = _description;
		this.strFacebook = _strFacebook;
		this.strInstagram = _strInstagram;
		this.imgFanart1 = _imgFanart1;
		this.imgFanart2 = _imgFanart2;
		this.imgFanart3 = _imgFanart3;
		this.imgFanart4 = _imgFanart4;
		this.imgBanner = _imgBanner;
		this.imgBadge = _imgBadge;
		this.teamJerseyStr = _teamJerseyStr;
		this.teamLogoStr = _teamLogoStr;
	}
	
}