import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { Hobby } from '@/app/hobby/hobby.model';
import { HobbyService } from '@/app/hobby/hobby.service';
import {
  CreateHobbyInput,
  ListHobbyInput,
  UpdateHobbyInput,
} from '@/app/hobby/dto/hobby.dto';

@Resolver(() => Hobby)
export class HobbyResolver {
  constructor(private hobbyService: HobbyService) {}

  @Query(() => Hobby)
  async hobby(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.hobbyService.getById(_id);
  }

  @Query(() => [Hobby])
  async hobbies(@Args('filters', { nullable: true }) filters?: ListHobbyInput) {
    return this.hobbyService.list(filters);
  }

  @Mutation(() => Hobby)
  async createHobby(@Args('payload') payload: CreateHobbyInput) {
    return this.hobbyService.create(payload);
  }

  @Mutation(() => Hobby)
  async updateHobby(@Args('payload') payload: UpdateHobbyInput) {
    return this.hobbyService.update(payload);
  }

  @Mutation(() => Hobby)
  async deleteHobby(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.hobbyService.delete(_id);
  }
}
