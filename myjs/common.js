function getLan(type)
{
	switch(type)
	{
		case 1 :
			return getCh();
		break;
		
		case 2 :
			return getEn();
		break;
		
		default:
			return 0;
		break;
	}
}