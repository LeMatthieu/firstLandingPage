imgPath = new Array;
SiClickGoTo = new Array;

b=4;
i0 = new Image;
i0.src = 'https://icones.pro/wp-content/uploads/2021/02/facebook-icone-bleu.png';
SiClickGoTo[0] = "https://fr-fr.facebook.com/";
imgPath[0] = i0.src;
i1 = new Image;
i1.src = 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/944px-Twitter_Bird.svg.png';
SiClickGoTo[1] = "https://twitter.com/?lang=fr";
imgPath[1] = i1.src;
i2 = new Image;
i2.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png';
SiClickGoTo[2] = "https://fr.linkedin.com/";
imgPath[2] = i2.src;

a = 0;
function StartAnim()
	{
	if (b >= 3)
		{
		document.write('<a href="#" onclick="ImgDest();return(false)"><img src="url_image0" border="0" alt="Menu" name="defil" /></a>');
		defilimg()
		}
	else
		{
		document.write('<a href="Lien0"><img src="url_image0" border="0" /></a>')
		}
	}
function ImgDest()
	{
	document.location.href = SiClickGoTo[a-1];
	}
function defilimg()
	{
	if (a == 3)
		{
		a = 0;
		}
	if (b >= 3)
		{
		document.defil.src = imgPath[a];
		tempo3 = setTimeout("defilimg()",5000);
		a++;
		}
	}