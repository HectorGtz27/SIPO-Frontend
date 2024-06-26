import axios from 'axios';
import {Pipeline, PipelineCreation, PipelineUpdate } from '../types/entities';
import {PipelineResponse, PipelineResponseArray } from '../types/responseTypes';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const getPipelines = async (from = 0, to = 100): Promise<Pipeline[]> => {
 try {
    const response = await axios.get<PipelineResponseArray>(`${API_BASE_URL}/pipelines?from=${from}&to=${to}`);
    return response.data.data;
 } catch (error) {
    throw new Error('Error al obtener los pipelines');
 }
};

export const getPipeline = async (id: number): Promise<PipelineResponse> => {
 try {
     const response = await axios.get<PipelineResponse>(`${API_BASE_URL}/pipelines/${id}`);
     return response.data;
 } catch (error) {
     throw new Error('Pipeline no encontrado');
 }
};

export const postPipeline = async (pipelineData: PipelineCreation): Promise<Pipeline> => {
 try {
    const response = await axios.post<PipelineResponse>(`${API_BASE_URL}/pipelines`, pipelineData);
    return response.data.data;
 } catch (error) {
    throw new Error('Error al crear el Pipeline');
 }
};

export const updatePipeline = async (id: number, pipelineData: PipelineUpdate): Promise<Pipeline> => {
 try {
    const response = await axios.patch<PipelineResponse>(`${API_BASE_URL}/pipelines/${id}`, pipelineData);
    return response.data.data;
 } catch (error) {
    throw new Error('Error al actualizar el Pipeline');
 }
};

export const deletePipeline = async (id: number): Promise<void> => {
 try {
    await axios.delete(`${API_BASE_URL}/pipelines/${id}`);
 } catch (error) {
    throw new Error('Error al eliminar el Pipeline');
 }
};