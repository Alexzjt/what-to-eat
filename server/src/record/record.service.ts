import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Record } from './record.entity';

@Injectable()
export class RecordService {
    constructor(
        @InjectRepository(Record)
        private recordRepository: Repository<Record>
    ) {}

    findAll(): Promise<Record[]> {
        return this.recordRepository.find();
    }

    findOne(id: string): Promise<Record> {
        return this.recordRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.recordRepository.delete(id);
    }

    save(record: Record): Promise<Record> {
        return this.recordRepository.save(record);
    }
}
