import { CodeBlock } from "./code-block"

const DevOps = () => {
    const dockerFileClient = `FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm i -g serve
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "serve", "-s", "dist" ]`;

    const dockerFileServer = `# Use an official Python image
FROM python:3.7.5
# Set the working directory inside the container
WORKDIR /app
# Copy the requirements file first (to optimize caching)
COPY requirements.txt .
# Install dependencies
RUN pip install -r requirements.txt
# Copy the rest of the application files
COPY . .
# move to the services folder
RUN cd /services
# Apply migrations (removing unnecessary CD command)
RUN python manage.py makemigrations && python manage.py migrate
# Expose port 8000 (Django default)
EXPOSE 8000
# Run Django server
CMD ["python", "manage.py", "runserver"]`

    const serviceyml = `apiVersion: v1
kind: Service
metadata:
  name: cvp_rust
spec:
  selector:
    app.kubernetes.io/name: cvp_rust_api
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376`;
    const deploymentyml = `apiVersion: apps/v1
kind: Deployment
metadata:
    name: cvp-rust-deployment
    labels:
    app: cvp_rust
spec:
    replicas: 3
    selector:
    matchLabels:
        app: cvp_rust
    template:
    metadata:
        labels:
        app: cvp_rust
    spec:
        containers:
        - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
    `;
  return (
    <div>
        <h1 className="text-3xl font-semibold tracking-tight">Containerizations in the App Architecture</h1>
        <p className="text-sm font-normal tracking-normal leading-tight whitespace-normal">Micro services are part of the IT which makes us create scalable apps, here docker is used to containerize both frontend and backend, github ci/cd pipelines are created with the help of .yml configs and argoCD, kubernetes .yml config are written properly</p>

        <main className="py-6 flex flex-col gap-8 max-w-6xl mx-auto">    
            <CodeBlock language="DockerFile" filename="DockerFile" code={dockerFileClient} />

            <CodeBlock language="DockerFile" filename="DockerFile" code={dockerFileServer} />
            
            <CodeBlock language="yml" filename="service.yml" code={serviceyml} />

            <CodeBlock language="yml" filename="deployments.yml" code={deploymentyml} />
        </main>
    </div>
  )
}

export default DevOps