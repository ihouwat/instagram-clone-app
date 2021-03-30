import { Injectable } from '@angular/core';
import { Post } from '../../models/types';

// Mock posts
import { POSTS } from '../../../mock/postsDB';

@Injectable({
  providedIn: 'root'
})
export class PostManagementService {

  loadPosts():Post[] {
    return POSTS;
  }

  constructor() { }
}
