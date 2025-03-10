import { CodeBlock } from "./code-block";

const ModelTraining = () => {
    const mlModel = `import torch.nn as nn

class CancerNN(nn.Module):
    def __init__(self):
        super(CancerNN, self).__init__()
        self.fc1 = nn.Linear(X_train.shape[1], 16)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(16, 8)
        self.fc3 = nn.Linear(8, 1)
        self.sigmoid = nn.Sigmoid()

    def forward(self, x):
        x = self.relu(self.fc1(x))
        x = self.relu(self.fc2(x))
        x = self.sigmoid(self.fc3(x))
        return x
    
# Initialize model, loss, and optimizer
model = CancerNN()
criterion = nn.BCELoss()  # Binary Cross-Entropy Loss
optimizer = optim.Adam(model.parameters(), lr=0.01)

# Ml Models - secondary learners
rf = RandomForestClassifier(n_estimators=50)
gb = GradientBoostingClassifier(n_estimators=50)
ada = AdaBoostClassifier(n_estimators=50)

rf.fit(X_train, y_train)
gb.fit(X_train, y_train)
ada.fit(X_train, y_train)`;
    const cnn_covid = `import torch.nn as nn

class PrepareData:
    def __init__(self, directory_path : str, image_size : tuple, batch_size : int) -> DataLoader:
        self.directory_path = directory_path
        self.image_size = image_size
        self.batch_size = batch_size

    def prepare_dataset(self):
        transform = transforms.Compose([
                transforms.Resize((image_size[0], image_size[1])),
                transforms.ToTensor(),
                transforms.Normalize(mean=[0.485, 0.456, 0.406],
                                    std=[0.229, 0.224, 0.225])
            ])
        
        dataset = datasets.ImageFolder(
            root=self.directory_path,
            transform=transform
        )

        loaded_data = DataLoader(
                dataset,
                batch_size=self.batch_size,
                shuffle=True,
                num_workers=4
            )
        
        return loaded_data
    
        
class CNN(nn.Module):
    def __init__(self, num_classes=2):
        super(CNN, self).__init__()

        self.conv1 = nn.Conv2d(in_channels=3, out_channels=32, kernel_size=3, stride=1, padding=1)
        self.bn1 = nn.BatchNorm2d(32)
        self.relu1 = nn.ReLU()
        self.pool1 = nn.MaxPool2d(kernel_size=2, stride=2)  # Output: (90, 90, 32)

        self.conv2 = nn.Conv2d(in_channels=32, out_channels=64, kernel_size=3, stride=1, padding=1)
        self.bn2 = nn.BatchNorm2d(64)
        self.relu2 = nn.ReLU()
        self.pool2 = nn.MaxPool2d(kernel_size=2, stride=2)  # Output: (45, 45, 64)

        self.conv3 = nn.Conv2d(in_channels=64, out_channels=128, kernel_size=3, stride=1, padding=1)
        self.bn3 = nn.BatchNorm2d(128)
        self.relu3 = nn.ReLU()
        self.pool3 = nn.MaxPool2d(kernel_size=2, stride=2)  # Output: (22, 22, 128)

        self.conv4 = nn.Conv2d(in_channels=128, out_channels=256, kernel_size=3, stride=1, padding=1)
        self.bn4 = nn.BatchNorm2d(256)
        self.relu4 = nn.ReLU()
        self.pool4 = nn.MaxPool2d(kernel_size=2, stride=2)  # Output: (11, 11, 256)

        self.dropout = nn.Dropout(0.5)
        self.fc1 = nn.Linear(256 * 11 * 11, 512)
        self.relu_fc1 = nn.ReLU()
        self.fc2 = nn.Linear(512, num_classes)

    def forward(self, x):
        x = self.pool1(self.relu1(self.bn1(self.conv1(x))))
        x = self.pool2(self.relu2(self.bn2(self.conv2(x))))
        x = self.pool3(self.relu3(self.bn3(self.conv3(x))))
        x = self.pool4(self.relu4(self.bn4(self.conv4(x))))
        
        x = x.view(x.size(0), -1)  # Flatten
        
        x = self.dropout(self.relu_fc1(self.fc1(x)))
        x = self.fc2(x)  # For binary classification
        
        return x
    
model = CNN(num_classes=10).to(device)
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

num_epochs = 10

for epoch in range(num_epochs):
    model.train()
    running_loss = 0.0
    for images, labels in train_loader:
        images, labels = images.to(device), labels.to(device)

        optimizer.zero_grad()
        outputs = model(images)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

        running_loss += loss.item()
    
    print(f"Epoch [{epoch+1}/{num_epochs}], Loss: {running_loss/len(train_loader):.4f}")
    `;
    const cnn_cancer = `import torch.nn as nn

class CNN(nn.Module):
    def __init__(self, num_classes=2):
        super(CNN, self).__init__()

        self.conv1 = nn.Conv2d(in_channels=3, out_channels=32, kernel_size=3, stride=1, padding=1)
        self.bn1 = nn.BatchNorm2d(32)
        self.relu1 = nn.ReLU()
        self.pool1 = nn.MaxPool2d(kernel_size=2, stride=2)  # Output: (90, 90, 32)

        self.conv2 = nn.Conv2d(in_channels=32, out_channels=64, kernel_size=3, stride=1, padding=1)
        self.bn2 = nn.BatchNorm2d(64)
        self.relu2 = nn.ReLU()
        self.pool2 = nn.MaxPool2d(kernel_size=2, stride=2)  # Output: (45, 45, 64)

        self.conv3 = nn.Conv2d(in_channels=64, out_channels=128, kernel_size=3, stride=1, padding=1)
        self.bn3 = nn.BatchNorm2d(128)
        self.relu3 = nn.ReLU()
        self.pool3 = nn.MaxPool2d(kernel_size=2, stride=2)  # Output: (22, 22, 128)

        self.conv4 = nn.Conv2d(in_channels=128, out_channels=256, kernel_size=3, stride=1, padding=1)
        self.bn4 = nn.BatchNorm2d(256)
        self.relu4 = nn.ReLU()
        self.pool4 = nn.MaxPool2d(kernel_size=2, stride=2)  # Output: (11, 11, 256)

        self.dropout = nn.Dropout(0.5)
        self.fc1 = nn.Linear(256 * 11 * 11, 512)
        self.relu_fc1 = nn.ReLU()
        self.fc2 = nn.Linear(512, num_classes)

    def forward(self, x):
        x = self.pool1(self.relu1(self.bn1(self.conv1(x))))
        x = self.pool2(self.relu2(self.bn2(self.conv2(x))))
        x = self.pool3(self.relu3(self.bn3(self.conv3(x))))
        x = self.pool4(self.relu4(self.bn4(self.conv4(x))))
        
        x = x.view(x.size(0), -1)  # Flatten
        
        x = self.dropout(self.relu_fc1(self.fc1(x)))
        x = self.fc2(x)  # For binary classification
        
        return x
    `;
  return (
    <div>
        <h1 className="text-3xl font-semibold tracking-tight">Architecture of the ML and Neural Networks</h1>
        <p className="text-sm font-normal tracking-normal leading-tight whitespace-normal">The Machine Learning models are built with sklearn and deep learning models are built and tester with pytorch libraries, packaged with joblib & pytorch to a reusable model .pkl and .pth files</p>

        <main className="flex flex-col max-w-6xl py-6 mx-auto w-full gap-8">
        <CodeBlock
            language="py"
            filename="cancer_csv_analyser_models.py"
            highlightLines={[9, 13, 14, 18]}
            code={mlModel}
        />

        <CodeBlock
            language=".py"
            filename="cancer_cnn.py"
            highlightLines={[9, 13, 14, 18]}
            code={cnn_cancer}
        />

        <CodeBlock
            language=".py"
            filename="covid_cnn.py"
            highlightLines={[9, 13, 14, 18]}
            code={cnn_covid}
        />
        </main>
    </div>
  )
}

export default ModelTraining