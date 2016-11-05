<<<<<<< HEAD
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { AppModule } from "./app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);
=======
import { setStatusBarColors } from "./utils/status-bar-util";

import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

setStatusBarColors();
platformNativeScriptDynamic().bootstrapModule(AppModule);
>>>>>>> angular-start
