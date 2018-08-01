import 'reflect-metadata'
import { useContainer } from 'routing-controllers'
import { Container } from 'typedi'
import { ServerService } from './endpoint/ServerService'

useContainer(Container)
Container.get(ServerService).listen(4000)
