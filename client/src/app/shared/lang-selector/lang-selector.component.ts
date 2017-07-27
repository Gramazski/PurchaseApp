/**
 * Created by Stanislau_Hramatskiu on 7/27/2017.
 */
import {Component, OnInit} from "@angular/core";
import {LangSelectorService} from "./lang-selector.service";
@Component({
    selector: 'lang-selector',
    templateUrl: 'src/app/shared/lang-selector/lang-selector.component.html'
})
export class LangSelectorComponent implements OnInit{
    langs: Array<string>;
    selectedLang: string;

    constructor(private langSelectorService: LangSelectorService){}

    ngOnInit(): void {
        this.langs = this.langSelectorService.getLangList();
        this.selectedLang = this.langSelectorService.getCurrentLang();
    }

    onChange(newLang: string){
        if (this.selectedLang !== newLang){
            this.selectedLang = this.langSelectorService.setNewLang(newLang);
        }
    }
}