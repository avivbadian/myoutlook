import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelegramsService } from './telegrams.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [HttpClientModule],
  providers: [TelegramsService]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
