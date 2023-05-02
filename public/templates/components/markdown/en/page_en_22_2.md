## Step 2: Then create some services inhereting classes into the file js/packages/cl.quickcorp.services.js :

```javascript
"use strict";
/*
* QuickCorp/QCObjects is licensed under the
* GNU Lesser General Public License v3.0
* [LICENSE] (https://github.com/QuickCorp/QCObjects/blob/master/LICENSE.txt)
*
* Permissions of this copyleft license are conditioned on making available
* complete source code of licensed works and modifications under the same
* license or the GNU GPLv3. Copyright and license notices must be preserved.
* Contributors provide an express grant of patent rights. However, a larger
* work using the licensed work through interfaces provided by the licensed
* work may be distributed under different terms and without source code for
* the larger work.
*
* Copyright (C) 2015 Jean Machuca,<correojean@gmail.com>
*
* Everyone is permitted to copy and distribute verbatim copies of this
* license document, but changing it is not allowed.
*/


Package('cl.quickcorp.service',[
	class FormSubmitService extends JSONService {
	    name= 'mySubmitService';
	    external= true;
	    cached= false;
	    method= 'POST';
	    withCredentials= false;
	    url= 'https://api.github.com/orgs/QuickCorp/repos';

		constructor ({headers}){
	      // service instantiated
	      delete headers.charset; // do not send the charset header
		  super({headers});
		}

		done (result){
			super.done(result);
	    }

		fail (result) {
			//TODO negative case
			console.log("***** ERROR");
			super.fail(result);
	    }
		
	}
])
```
