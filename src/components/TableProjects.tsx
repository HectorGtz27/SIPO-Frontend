import { useEffect, useState } from 'react';
import { deleteProject } from '../api/projectAPI';
import { useApisStore } from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import DeleteModal from './DeleteModal';
import { format } from 'date-fns';  
import ProjectDetailsModal from '../pages/Account Manager/Projects/ViewMoreProject';
import { Project } from '../types';

interface TableProjectsProps {
    searchTerm: string;
}

const TableProjects = ({ searchTerm }: TableProjectsProps) => {
    const { projects, fetchProjects } = useApisStore();
    const [deleteActive, setDeleteActive] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState<number>(-1);
    const [detailsActive, setDetailsActive] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleDeleteProject = async (projectId: number) => {
        try {
            await deleteProject(projectId);
            fetchProjects();
        } catch (error) {
            console.error('Error deleting project:', error);
            alert('Failed to delete project');
        }
    };

    const handleViewDetails = (project: Project) => {
        setSelectedProject(project);
        setDetailsActive(true);
    };

    // Filtrado de proyectos basado en el término de búsqueda
    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calcular el total de páginas
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

    // Obtener proyectos para la página actual
    const projectsToShow = filteredProjects.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const goToNextPage = () => {
        setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages - 1));
    };

    const goToPreviousPage = () => {
        setCurrentPage(currentPage => Math.max(currentPage - 1, 0));
    };

    return (
        <div className="relative overflow-x-auto sm:rounded-lg p-4">
            <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 shadow-md rounded">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">ID</th>
                        <th scope="col" className="px-6 py-3 text-center">Name</th>
                        <th scope="col" className="px-6 py-3 text-center">Status</th>
                        <th scope="col" className="px-6 py-3 text-center">Posting Date</th>
                        <th scope="col" className="px-6 py-3 text-center">Owner</th>
                        <th scope="col" className="px-6 py-3 text-center">Expected Closure Date</th>
                        <th scope="col" className="px-6 py-3 text-center">Revenue</th>
                        <th scope="col" className="px-6 py-3 text-center"></th>
                    </tr>
                </thead>
                <tbody>
                    {projectsToShow.map((project) => (
                        <tr key={project.id} className="border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">{project.id}</th>
                            <td className="px-6 py-4 text-center">{project.name}</td>
                            <td className="px-6 py-4 text-center">{project.status}</td>
                            <td className="px-6 py-4 text-center">
                                {project.posting_date ? format(project.posting_date, 'dd/MM/yyyy') : 'N/A'}
                            </td>
                            <td className="px-6 py-4 text-center">{project.owner_user?.name || 'No Owner'}</td>
                            <td className="px-6 py-4 text-center">
                                {project.exp_closure_date ? format(project.exp_closure_date, 'dd/MM/yyyy') : 'N/A'}
                            </td>
                            <td className="px-6 py-4 text-center">{project.revenue}</td>
                            <td className="px-6 py-4 text-center">
                                <Link to={`/accountManager/projects/editProjects/${project.id}`}>
                                    <button className="font-medium text-black hover:underline pr-4">
                                        <FontAwesomeIcon icon={faPencilAlt} />
                                    </button>
                                </Link>
                                <button onClick={() => handleViewDetails(project)} className="font-medium hover:underline text-black pr-4">
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                                <button onClick={() => { setDeleteActive(true); setSelectedId(project.id); }} className="font-medium hover:underline text-black hover:text-gray-700">
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination flex justify-end mt-4 items-center">
                <button onClick={goToPreviousPage} disabled={currentPage === 0} className="mr-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50">Previous</button>
                <span className="mx-2">Page {currentPage + 1} of {totalPages}</span>
                <button onClick={goToNextPage} disabled={currentPage >= totalPages - 1} className="ml-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50">Next</button>
            </div>
            <ProjectDetailsModal isActive={detailsActive} project={selectedProject as Project} setActive={setDetailsActive} />
            <DeleteModal isActive={deleteActive} selectedId={selectedId} setDeleteActive={setDeleteActive} onDeleteConfirm={handleDeleteProject} />
        </div>
    );
}

export default TableProjects;


