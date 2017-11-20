export class Parent{
    label:string
    collapsedIcon:string = "fa-mortar-board"
    expandedIcon: string = "fa-mortar-board"
    expanded:boolean = true
    type:string = "parent"
    children:Child[] = [];

    setLabel(label:string){
        this.label = label;
    }   

    addChild(child: Child){
        this.children.push(child);
    }
}

export class Child{
    label:string
    id:string
    running:boolean = false;

    setLabel(label:string){
        this.label = label;
    }

    setId(id:string){
        this.id = id;
    }

    setRunning(running: boolean){
        this.running = running;
    }
}