import { Express, Request, Response } from "express";
import { JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete}  from 'routing-controllers';

@JsonController()
export class CRUDController {
    constructor(){

    }

    @Get('/getList')
    @OnUndefined(404)
    public GetList() {
        return 'Get List now here..'
    }

    @Post('/createList')
    @OnUndefined(404)
    public CreateList(){

    }

    @Delete('/deleteList')
    @OnUndefined(404)
    public DeleteList(){

    }

    @Put('/updateList')
    @OnUndefined(404)
    public UpdateList(){

    }

}