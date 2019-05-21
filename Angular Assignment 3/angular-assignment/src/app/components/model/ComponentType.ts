import { Type } from '@angular/core';
import { ContainerComponentData } from './ContainerComponentData';

export class ComponentType {
    constructor(public component: Type<any>, public data: ContainerComponentData) {}
}
