import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ScanComponent } from './scan/scan.component';
import { RecommendationsComponent } from './scan/recommendations/recommendations.component';
import { AugmentComponent } from './scan/augment/augment.component';

const routes: Routes = [
    {
        path: 'how-it-works',
        component: HowItWorksComponent,
        data: { title: "How ARadio works" }
    },
    {
        path: 'upload',
        component: ScanComponent,
        data: { title: "Upload your medical image" }
    },
    {
        path: 'recommendations',
        component: RecommendationsComponent,
        data: { title: "Analysis and recommendations" }
    },
    {
        path: '3d-renders',
        component: AugmentComponent,
        data: { title: "3D Visualization" }
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
