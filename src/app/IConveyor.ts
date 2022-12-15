export class IConveyor {
    
    status: number | undefined;
    error: boolean | undefined;
    data:   {
        conveyor: {
            conveyorId: number;
            conveyorName: string;
            description: string;
            language: string;
            length: number;
            width: number;
            height: number;
            weight: number;
            quality: number;
            icon: string;
            createdAt: string;
            userId: number;
        };


    } | undefined   
}

