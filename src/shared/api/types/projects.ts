/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/health': {
    /** Health */
    get: operations['health_health_get'];
  };
  '/api/rest/projects/': {
    /** Get Projects */
    get: operations['get_projects_api_rest_projects__get'];
    /** Create Project */
    post: operations['create_project_api_rest_projects__post'];
  };
  '/api/rest/projects/{project_id}': {
    /** Get Project */
    get: operations['get_project_api_rest_projects__project_id__get'];
    /** Partial Update Project */
    patch: operations['partial_update_project_api_rest_projects__project_id__patch'];
  };
  '/api/rest/projects/{project_id}/history': {
    /** History */
    get: operations['history_api_rest_projects__project_id__history_get'];
  };
  '/api/rest/projects/{project_id}/avatar': {
    /** Upload Project Avatar */
    post: operations['upload_project_avatar_api_rest_projects__project_id__avatar_post'];
    /** Delete Project Avatar */
    delete: operations['delete_project_avatar_api_rest_projects__project_id__avatar_delete'];
  };
  '/api/rest/projects/{project_id}/positions/': {
    /** Get Project Positions */
    get: operations['get_project_positions_api_rest_projects__project_id__positions__get'];
    /** Create Project Position */
    post: operations['create_project_position_api_rest_projects__project_id__positions__post'];
  };
  '/api/rest/projects/{project_id}/positions/{position_id}': {
    /** Remove Project Position */
    delete: operations['remove_project_position_api_rest_projects__project_id__positions__position_id__delete'];
  };
  '/api/rest/projects/{project_id}/positions/{position_id}/participants/': {
    /** Create Participant */
    post: operations['create_participant_api_rest_projects__project_id__positions__position_id__participants__post'];
  };
  '/api/rest/projects/{project_id}/positions/{position_id}/participants/{participant_id}': {
    /** Get Participant */
    get: operations['get_participant_api_rest_projects__project_id__positions__position_id__participants__participant_id__get'];
    /** Update Participant */
    post: operations['update_participant_api_rest_projects__project_id__positions__position_id__participants__participant_id__post'];
  };
  '/api/rest/projects/{project_id}/positions/{position_id}/skills/': {
    /** Get Project Position Skills */
    get: operations['get_project_position_skills_api_rest_projects__project_id__positions__position_id__skills__get'];
    /** Update Project Position Skills */
    post: operations['update_project_position_skills_api_rest_projects__project_id__positions__position_id__skills__post'];
  };
  '/api/rest/projects/{project_id}/reviews/': {
    /** Create Review */
    post: operations['create_review_api_rest_projects__project_id__reviews__post'];
  };
  '/api/rest/users/{user_id}/statistic': {
    /** Get User Statistic */
    get: operations['get_user_statistic_api_rest_users__user_id__statistic_get'];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** Body_upload_project_avatar_api_rest_projects__project_id__avatar_post */
    Body_upload_project_avatar_api_rest_projects__project_id__avatar_post: {
      /**
       * Avatar
       * Format: binary
       */
      avatar: string;
    };
    /** CreateProjectPositionRequest */
    CreateProjectPositionRequest: {
      /**
       * Specialization Id
       * Format: uuid
       */
      specialization_id: string;
    };
    /** CreateProjectRequest */
    CreateProjectRequest: {
      /** Name */
      name: string;
      /** Description */
      description?: string | null;
      /**
       * Owner Id
       * Format: uuid
       */
      owner_id: string;
      /** Deadline */
      deadline?: string | null;
    };
    /** CreateReviewRequest */
    CreateReviewRequest: {
      /**
       * User Id
       * Format: uuid
       */
      user_id: string;
      /** Rate */
      rate: number;
      /** Text */
      text: string;
    };
    /** HTTPValidationError */
    HTTPValidationError: {
      /** Detail */
      detail?: components['schemas']['ValidationError'][];
    };
    /** HealthResponse */
    HealthResponse: {
      /** Version */
      version: string;
      /** Name */
      name: string;
    };
    /**
     * ParticipantStatusEnum
     * @enum {string}
     */
    ParticipantStatusEnum: 'request' | 'declined' | 'joined' | 'left';
    /** ProjectHistoryListResponse */
    ProjectHistoryListResponse: {
      /** Data */
      data: components['schemas']['ProjectHistoryResponse'][];
      /** Page */
      page: number;
      /** Per Page */
      per_page: number;
      /** Total Pages */
      total_pages?: number | null;
      /** Total Items */
      total_items?: number | null;
    };
    /** ProjectHistoryResponse */
    ProjectHistoryResponse: {
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /**
       * Project Id
       * Format: uuid
       */
      project_id: string;
      status: components['schemas']['ProjectStatusEnum'];
      /**
       * Created At
       * Format: date-time
       */
      created_at: string;
    };
    /** ProjectListResponse */
    ProjectListResponse: {
      /** Data */
      data: components['schemas']['ProjectResponse'][];
      /** Page */
      page: number;
      /** Per Page */
      per_page: number;
      /** Total Pages */
      total_pages?: number | null;
      /** Total Items */
      total_items?: number | null;
    };
    /** ProjectPartialUpdateRequest */
    ProjectPartialUpdateRequest: {
      /** Status */
      status?: unknown;
    };
    /** ProjectParticipantResponse */
    ProjectParticipantResponse: {
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /**
       * Position Id
       * Format: uuid
       */
      position_id: string;
      /**
       * User Id
       * Format: uuid
       */
      user_id: string;
      status: components['schemas']['ParticipantStatusEnum'];
      /** Joined At */
      joined_at: string | null;
      /**
       * Created At
       * Format: date-time
       */
      created_at: string;
      /**
       * Updated At
       * Format: date-time
       */
      updated_at: string;
    };
    /** ProjectPositionResponse */
    ProjectPositionResponse: {
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /**
       * Project Id
       * Format: uuid
       */
      project_id: string;
      /** Closed At */
      closed_at: string | null;
      /**
       * Created At
       * Format: date-time
       */
      created_at: string;
      /**
       * Updated At
       * Format: date-time
       */
      updated_at: string;
      /**
       * Specialization Id
       * Format: uuid
       */
      specialization_id: string;
    };
    /** ProjectPositionsResponse */
    ProjectPositionsResponse: {
      /** Data */
      data: components['schemas']['ProjectPositionResponse'][];
      /** Page */
      page: number;
      /** Per Page */
      per_page: number;
      /** Total Pages */
      total_pages?: number | null;
      /** Total Items */
      total_items?: number | null;
    };
    /** ProjectResponse */
    ProjectResponse: {
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /** Name */
      name: string;
      /** Description */
      description: string | null;
      /**
       * Owner Id
       * Format: uuid
       */
      owner_id: string;
      /** Deadline */
      deadline: string | null;
      /**
       * Created At
       * Format: date-time
       */
      created_at: string;
      /**
       * Updated At
       * Format: date-time
       */
      updated_at: string;
      status: components['schemas']['ProjectStatusEnum'];
    };
    /**
     * ProjectStatusEnum
     * @enum {string}
     */
    ProjectStatusEnum: 'preparation' | 'in_work' | 'finished';
    /** ReviewResponse */
    ReviewResponse: {
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /**
       * Project Id
       * Format: uuid
       */
      project_id: string;
      /**
       * From User Id
       * Format: uuid
       */
      from_user_id: string;
      /**
       * To User Id
       * Format: uuid
       */
      to_user_id: string;
      /** Rate */
      rate: number;
      /** Text */
      text: string;
      /**
       * Created At
       * Format: date-time
       */
      created_at: string;
      /**
       * Updated At
       * Format: date-time
       */
      updated_at: string;
    };
    /** UpdateParticipantRequest */
    UpdateParticipantRequest: {
      status: components['schemas']['ParticipantStatusEnum'];
    };
    /** UserStatisticResponse */
    UserStatisticResponse: {
      /** Ownership Projects Count */
      ownership_projects_count: number;
      /** Participant Projects Count */
      participant_projects_count: number;
      /** Rate */
      rate: number;
    };
    /** ValidationError */
    ValidationError: {
      /** Location */
      loc: (string | number)[];
      /** Message */
      msg: string;
      /** Error Type */
      type: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {
  /** Health */
  health_health_get: {
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['HealthResponse'];
        };
      };
    };
  };
  /** Get Projects */
  get_projects_api_rest_projects__get: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Number of items per page */
        per_page?: number;
        query_text?: unknown;
        owner_id?: unknown;
        deadline?: unknown;
        status?: unknown;
        position_is_closed?: unknown;
        position_skill_ids?: unknown;
        position_specialization_ids?: unknown;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['ProjectListResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Create Project */
  create_project_api_rest_projects__post: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateProjectRequest'];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['ProjectResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Get Project */
  get_project_api_rest_projects__project_id__get: {
    parameters: {
      path: {
        project_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['ProjectResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Partial Update Project */
  partial_update_project_api_rest_projects__project_id__patch: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      path: {
        project_id: string;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['ProjectPartialUpdateRequest'];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['ProjectResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** History */
  history_api_rest_projects__project_id__history_get: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Number of items per page */
        per_page?: number;
      };
      path: {
        project_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['ProjectHistoryListResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Upload Project Avatar */
  upload_project_avatar_api_rest_projects__project_id__avatar_post: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      path: {
        project_id: string;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    requestBody: {
      content: {
        'multipart/form-data': components['schemas']['Body_upload_project_avatar_api_rest_projects__project_id__avatar_post'];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['ProjectResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Delete Project Avatar */
  delete_project_avatar_api_rest_projects__project_id__avatar_delete: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      path: {
        project_id: string;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['ProjectResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Get Project Positions */
  get_project_positions_api_rest_projects__project_id__positions__get: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Number of items per page */
        per_page?: number;
      };
      path: {
        project_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['ProjectPositionsResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Create Project Position */
  create_project_position_api_rest_projects__project_id__positions__post: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      path: {
        project_id: string;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateProjectPositionRequest'];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['ProjectPositionResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Remove Project Position */
  remove_project_position_api_rest_projects__project_id__positions__position_id__delete: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      path: {
        project_id: string;
        position_id: string;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['ProjectPositionResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Create Participant */
  create_participant_api_rest_projects__project_id__positions__position_id__participants__post: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      path: {
        position_id: string;
        project_id: string;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['ProjectParticipantResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Get Participant */
  get_participant_api_rest_projects__project_id__positions__position_id__participants__participant_id__get: {
    parameters: {
      path: {
        participant_id: string;
        position_id: string;
        project_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['ProjectParticipantResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Update Participant */
  update_participant_api_rest_projects__project_id__positions__position_id__participants__participant_id__post: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      path: {
        project_id: string;
        participant_id: string;
        position_id: string;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateParticipantRequest'];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['ProjectParticipantResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Get Project Position Skills */
  get_project_position_skills_api_rest_projects__project_id__positions__position_id__skills__get: {
    parameters: {
      path: {
        position_id: string;
        project_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': string[];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Update Project Position Skills */
  update_project_position_skills_api_rest_projects__project_id__positions__position_id__skills__post: {
    parameters: {
      path: {
        position_id: string;
        project_id: string;
      };
    };
    requestBody: {
      content: {
        'application/json': string[];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': string[];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Create Review */
  create_review_api_rest_projects__project_id__reviews__post: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      path: {
        project_id: string;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateReviewRequest'];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['ReviewResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Get User Statistic */
  get_user_statistic_api_rest_users__user_id__statistic_get: {
    parameters: {
      path: {
        user_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['UserStatisticResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
}
