import Container from "@/components/shared/Container";
import { Title } from "@/components/shared/Title";
import Stats from "./_components/Stats";

export default function DashboardPage(){
    return(
        <Container>
            <Title className="my-8">
                Dashboard
            </Title>
            
            <Stats />
            <div className="flex flex-1 flex-col gap-4 my-8">
                <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                <div className="aspect-video rounded-xl bg-muted/100" />
                <div className="aspect-video rounded-xl bg-muted/100" />
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/100 md:min-h-min" />
            </div> 
            <div className="flex flex-1 flex-col gap-4 my-8">
                <div className="grid auto-rows-min gap-4 md:grid-cols-1">
                <div className="aspect-video rounded-xl bg-muted/100" />
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/100 md:min-h-min" />
            </div> 
        </Container>
    )
}