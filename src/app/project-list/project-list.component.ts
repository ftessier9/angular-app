import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: String[];
}

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent implements OnInit {
    projects: Project[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get<Project[]>('../../assets/data/project.json').subscribe((data) => {
            console.log(data)
            this.projects = data;
        });
    }
}
