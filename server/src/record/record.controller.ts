import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {RecordService} from "./record.service";
import {Record} from "./record.entity";

@Controller('records')
export class RecordController {
    constructor(private readonly recordService: RecordService) {
    }

    @Get("")
    getRecords() {
        return this.recordService.findAll();
    }

    @Post()
    postRecord(@Body() record: Record) {
        return this.recordService.save(record);
    }

    @Get(":id")
    getRecordById(@Param() params) {
        return this.recordService.findOne(params.id);
    }

    @Delete(":id")
    deleteRecordById(@Param() params) {
        return this.recordService.remove(params.id);
    }
}
