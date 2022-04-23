import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class Player{
	public id: number;
	public name: string;
	public country: string|null = null;
	public teamId: number|null = null;
	public dateOfBorn: Date|null = null;
	public number: number|null = null;
	public position: string|null = null;
	public height: string|null = null;
	public weight: string|null = null;
	public strWeight: string|null = null;
	public description: string|null = null;
	public strFacebook: string|null = null;
	public strInstagram: string|null = null;
	public imgFanart1: string|null = null;
	public imgFanart2: string|null = null;
	public imgFanart3: string|null = null;
	public imgFanart4: string|null = null;
	public imgBanner: string|null = null;
	public imgBadge: string|null = null;
	public imgCutout: string|null = null;
	public imgThumb: string|null = null;

	constructor(
		_id: number,
		_name: string,
		_country: string|null = null,
		_teamId: number|null = null,
		_dateOfBorn: Date|null = null,
		_number: number|null = null,
		_position: string|null = null,
		_height: string|null = null,
		_weight: string|null = null,
		_description: string|null = null,
		_strFacebook: string|null = null,
		_strInstagram: string|null = null,
		_imgFanart1: string|null = null,
		_imgFanart2: string|null = null,
		_imgFanart3: string|null = null,
		_imgFanart4: string|null = null,
		_imgBanner: string|null = null,
		_imgBadge: string|null = null,
		_imgCutout: string|null = null,
		_imgThumb: string|null = null,


		){
			
    this.id = _id;
	this.name = _name;
	this.country = _country;
	this.teamId = _teamId;
	this.dateOfBorn = _dateOfBorn;
	this.number = _number;
	this.position = _position;
	this.height = _height;
	this.weight = _weight;
	this.description = _description;
	this.strFacebook = _strFacebook ;
	this.strInstagram = _strInstagram ;
	this.imgFanart1 = _imgFanart1;
	this.imgFanart2 = _imgFanart2;
	this.imgFanart3 = _imgFanart3;
	this.imgFanart4 =_imgFanart4;
	this.imgBanner = _imgBanner;
	this.imgBadge = _imgBadge;
	this.imgCutout = _imgCutout;
	this.imgThumb = _imgThumb; 	
}
}