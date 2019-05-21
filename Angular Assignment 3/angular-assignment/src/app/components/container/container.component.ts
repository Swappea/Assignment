import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ComponentType } from '../model/ComponentType';
import { GetComponentListService } from '../services/get-component-list.service';
import { ContainerDirective } from '../directives/container.directive';
import { ContainerComponentData } from '../model/ContainerComponentData';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @ViewChild(ContainerDirective) containerDirectiveRef: ContainerDirective;
  compListData: ComponentType[];

  constructor(private getCompList: GetComponentListService, private componentFactoryResolver: ComponentFactoryResolver) {
    this.compListData = this.getCompList.getComponentList();
  }

  ngOnInit() {
    
  }

  loadChildComponent() {
    const currComponent = this.compListData[1];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(currComponent.component);
    const viewContainerRef = this.containerDirectiveRef.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as ContainerComponentData).compTitle = currComponent.data.compTitle;
    (componentRef.instance as ContainerComponentData).index = currComponent.data.index;
  }

  dragStarted(event, index) {
    console.log('DRAG STARTED', event, index);
  }

  drop(event) {
    event.preventDefault();
    console.log('DRAG FINISHED', event);
  }

  allowDrop(event) {
    event.preventDefault();
    console.log('DRAGGING', event);
  }

}
