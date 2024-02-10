/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "./environments";
import * as core from "./core";
import * as JulepApi from "./api";
export declare namespace JulepApiClient {
  interface Options {
    environment?: core.Supplier<environments.JulepApiEnvironment | string>;
    apiKey: core.Supplier<string>;
  }
  interface RequestOptions {
    timeoutInSeconds?: number;
    maxRetries?: number;
  }
}
export declare class JulepApiClient {
  protected readonly _options: JulepApiClient.Options;
  constructor(_options: JulepApiClient.Options);
  /**
   * List sessions created (use limit/offset pagination to get large number of sessions; sorted by descending order of `created_at`)
   *
   * @example
   *     await julepApi.listSessions({})
   */
  listSessions(
    request?: JulepApi.ListSessionsRequest,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.ListSessionsResponse>;
  /**
   * Create a session between an agent and a user
   *
   * @example
   *     await julepApi.createSession({
   *         userId: "user_id",
   *         agentId: "agent_id"
   *     })
   */
  createSession(
    request: JulepApi.CreateSessionRequest,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.ResourceCreatedResponse>;
  /**
   * List users created (use limit/offset pagination to get large number of sessions; sorted by descending order of `created_at`)
   *
   * @example
   *     await julepApi.listUsers({})
   */
  listUsers(
    request?: JulepApi.ListUsersRequest,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.ListUsersResponse>;
  /**
   * Create a new user
   *
   * @example
   *     await julepApi.createUser({})
   */
  createUser(
    request?: JulepApi.CreateUserRequest,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.ResourceCreatedResponse>;
  /**
   * List agents created (use limit/offset pagination to get large number of sessions; sorted by descending order of `created_at`)
   *
   * @example
   *     await julepApi.listAgents({})
   */
  listAgents(
    request?: JulepApi.ListAgentsRequest,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.ListAgentsResponse>;
  /**
   * Create a new agent
   *
   * @example
   *     await julepApi.createAgent({
   *         name: "name",
   *         about: "about",
   *         model: "model"
   *     })
   */
  createAgent(
    request: JulepApi.CreateAgentRequest,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.ResourceCreatedResponse>;
  /**
   *
   *
   * @example
   *     await julepApi.getSession("session_id")
   */
  getSession(
    sessionId: string,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.Session>;
  /**
   *
   *
   * @example
   *     await julepApi.updateSession("session_id", {
   *         situation: "situation"
   *     })
   */
  updateSession(
    sessionId: string,
    request: JulepApi.UpdateSessionRequest,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.ResourceUpdatedResponse>;
  /**
   *
   *
   * @example
   *     await julepApi.deleteSession("session_id")
   */
  deleteSession(
    sessionId: string,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<void>;
  /**
   * Sorted (created_at descending)
   *
   * @example
   *     await julepApi.getSuggestions("session_id", {})
   */
  getSuggestions(
    sessionId: string,
    request?: JulepApi.GetSuggestionsRequest,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.GetSuggestionsResponse>;
  /**
   * Sorted (created_at ascending)
   *
   * @example
   *     await julepApi.getHistory("session_id", {})
   */
  getHistory(
    sessionId: string,
    request?: JulepApi.GetHistoryRequest,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.GetHistoryResponse>;
  /**
   *
   *
   * @example
   *     await julepApi.chat("session_id", {
   *         accept: "application/json",
   *         messages: [{
   *                 role: JulepApi.InputChatMlMessageRole.User,
   *                 content: "content"
   *             }]
   *     })
   */
  chat(
    sessionId: string,
    request: JulepApi.ChatInput,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.ChatResponse>;
  /**
   * Sorted (created_at descending)
   *
   * @example
   *     await julepApi.getAgentMemories("agent_id", {
   *         query: "query"
   *     })
   */
  getAgentMemories(
    agentId: string,
    request: JulepApi.GetAgentMemoriesRequest,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.GetAgentMemoriesResponse>;
  /**
   *
   *
   * @example
   *     await julepApi.getUser("user_id")
   */
  getUser(
    userId: string,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.User>;
  /**
   *
   *
   * @example
   *     await julepApi.updateUser("user_id", {})
   */
  updateUser(
    userId: string,
    request?: JulepApi.UpdateUserRequest,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.ResourceUpdatedResponse>;
  /**
   *
   *
   * @example
   *     await julepApi.deleteUser("user_id")
   */
  deleteUser(
    userId: string,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<void>;
  /**
   *
   *
   * @example
   *     await julepApi.getAgent("agent_id")
   */
  getAgent(
    agentId: string,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.Agent>;
  /**
   *
   *
   * @example
   *     await julepApi.updateAgent("agent_id", {})
   */
  updateAgent(
    agentId: string,
    request?: JulepApi.UpdateAgentRequest,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.ResourceUpdatedResponse>;
  /**
   *
   *
   * @example
   *     await julepApi.deleteAgent("agent_id")
   */
  deleteAgent(
    agentId: string,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<void>;
  /**
   * Sorted (created_at descending)
   *
   * @example
   *     await julepApi.getAgentDocs("agent_id", {})
   */
  getAgentDocs(
    agentId: string,
    request?: JulepApi.GetAgentDocsRequest,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.GetAgentDocsResponse>;
  /**
   *
   *
   * @example
   *     await julepApi.createAgentDoc("agent_id", {
   *         title: "title",
   *         content: "content"
   *     })
   */
  createAgentDoc(
    agentId: string,
    request: JulepApi.CreateDoc,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.ResourceCreatedResponse>;
  /**
   * Sorted (created_at descending)
   *
   * @example
   *     await julepApi.getUserDocs("user_id", {})
   */
  getUserDocs(
    userId: string,
    request?: JulepApi.GetUserDocsRequest,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.GetUserDocsResponse>;
  /**
   *
   *
   * @example
   *     await julepApi.createUserDoc("user_id", {
   *         title: "title",
   *         content: "content"
   *     })
   */
  createUserDoc(
    userId: string,
    request: JulepApi.CreateDoc,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.ResourceCreatedResponse>;
  /**
   *
   *
   * @example
   *     await julepApi.deleteUserDoc("user_id", "doc_id")
   */
  deleteUserDoc(
    userId: string,
    docId: string,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<void>;
  /**
   *
   *
   * @example
   *     await julepApi.deleteAgentDoc("agent_id", "doc_id")
   */
  deleteAgentDoc(
    agentId: string,
    docId: string,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<void>;
  /**
   *
   *
   * @example
   *     await julepApi.deleteAgentMemory("agent_id", "memory_id")
   */
  deleteAgentMemory(
    agentId: string,
    memoryId: string,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<void>;
  /**
   * Sorted (created_at descending)
   *
   * @example
   *     await julepApi.getAgentTools("agent_id", {})
   */
  getAgentTools(
    agentId: string,
    request?: JulepApi.GetAgentToolsRequest,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.GetAgentToolsResponse>;
  /**
   *
   *
   * @example
   *     await julepApi.createAgentTool("agent_id", {
   *         type: JulepApi.CreateToolRequestType.Function,
   *         definition: {
   *             name: "name",
   *             parameters: {}
   *         }
   *     })
   */
  createAgentTool(
    agentId: string,
    request: JulepApi.CreateToolRequest,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.ResourceCreatedResponse>;
  /**
   *
   *
   * @example
   *     await julepApi.updateAgentTool("agent_id", "tool_id", {
   *         definition: {
   *             name: "name",
   *             parameters: {}
   *         }
   *     })
   */
  updateAgentTool(
    agentId: string,
    toolId: string,
    request: JulepApi.UpdateToolRequest,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<JulepApi.ResourceUpdatedResponse>;
  /**
   *
   *
   * @example
   *     await julepApi.deleteAgentTool("agent_id", "tool_id")
   */
  deleteAgentTool(
    agentId: string,
    toolId: string,
    requestOptions?: JulepApiClient.RequestOptions,
  ): Promise<void>;
  protected _getAuthorizationHeader(): Promise<string>;
}