class Launcher{

    constructor(body,anchor){

        var options={

            bodyA:body,
            pointB:anchor,
            stifness:0.04,
            lenght:1
        }

            this.bodyA=body
            this.pointB=anchor
            this.launcher=Constraint.create(options)
            World.add(world,this.launcher)

    }

        display(){

                if(this.launcher.bodyA){
                    strokeWeight(2)
                    line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y)
                }
            }

                    fly(){

                        this.launcher.bodyA=null
                    }

                    attach(body){

                        this.launcher.bodyA=body
                    }
}