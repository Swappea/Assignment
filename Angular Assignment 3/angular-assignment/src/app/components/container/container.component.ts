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
  private currIndex = -1;

  constructor(private getCompList: GetComponentListService, private componentFactoryResolver: ComponentFactoryResolver) {
    this.compListData = this.getCompList.getComponentList();
  }

  ngOnInit() {

  }

  loadChildComponent(index: number) {
    const currComponent = this.compListData[index];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(currComponent.component);
    const viewContainerRef = this.containerDirectiveRef.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as ContainerComponentData).compTitle = currComponent.data.compTitle;
    (componentRef.instance as ContainerComponentData).index = currComponent.data.index;
  }

  dragStarted(event, index: number) {
    this.currIndex = index;
  }

  drop(event) {
    event.preventDefault();
    this.loadChildComponent(this.currIndex);
  }

  allowDrop(event) {
    event.preventDefault();
  }

}
