/**
 * Created by Stanislau_Hramatskiu on 7/27/2017.
 */
import {Injectable} from "@angular/core";
import {CookieService} from 'ngx-cookie'
import {TranslateService} from "@ngx-translate/core";
import {LangsLoaderService} from "./langs-loader.service";
import {Response} from "@angular/http";

@Injectable()
export class LangSelectorService{
    constructor(private cookieService: CookieService, private translateService: TranslateService, private langsLoaderService: LangsLoaderService){
        this.langsLoaderService.getLangs().subscribe((data: Response) => {
            this.translateService.addLangs(data.json().langs);
            this.translateService.setDefaultLang(data.json().defaultLang);
        });
    }

    getCurrentLang(): string{
        return this.cookieService.get('LANG') || this.saveNewLang(this.translateService.getDefaultLang());
    }

    getLangList(): Array<string>{
        return this.translateService.getLangs();
    }

    getStartLang(): string{
        return this.cookieService.get('LANG') || this.setNewLang(this.translateService.getBrowserLang());
    }

    setNewLang(newLang: string): string{
        this.translateService.use(newLang);
        return this.saveNewLang(this.translateService.currentLang);
    }

    private saveNewLang(newLang: string): string{
        this.cookieService.put('LANG', newLang);
        return newLang;
    }
}