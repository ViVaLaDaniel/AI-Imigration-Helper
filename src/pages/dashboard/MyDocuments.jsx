import React, { useState } from 'react';
import { FileText, MoreVertical, Download, Eye, Trash2, Grid, List } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import styles from './MyDocuments.module.css';

const DocumentCard = ({ doc }) => (
  <Card className={styles.docCard}>
    <div className={styles.preview}>
      <div className={styles.fileType}>{doc.type}</div>
      {/* Placeholder for document thumbnail */}
    </div>
    <div className={styles.docInfo}>
      <div className={styles.docHeader}>
        <h3 className={styles.docName}>{doc.name}</h3>
        <button className={styles.moreBtn}><MoreVertical size={16} /></button>
      </div>
      <div className={styles.meta}>
        <span>{doc.date}</span>
        <span className={styles.size}>{doc.size}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.actionBtn} title="Preview"><Eye size={16} /></button>
        <button className={styles.actionBtn} title="Download"><Download size={16} /></button>
        <button className={`${styles.actionBtn} ${styles.delete}`} title="Delete"><Trash2 size={16} /></button>
      </div>
    </div>
  </Card>
);

const MyDocuments = () => {
  const [viewMode, setViewMode] = useState('grid');

  const docs = [
    { id: 1, name: 'Visa_Application.pdf', type: 'PDF', date: 'Oct 24, 2023', size: '2.4 MB' },
    { id: 2, name: 'Passport_Scan.jpg', type: 'JPG', date: 'Oct 22, 2023', size: '1.1 MB' },
    { id: 3, name: 'Bank_Statement.pdf', type: 'PDF', date: 'Oct 20, 2023', size: '4.2 MB' },
    { id: 4, name: 'Employment_Letter.docx', type: 'DOCX', date: 'Oct 15, 2023', size: '0.8 MB' },
    { id: 5, name: 'Birth_Certificate.pdf', type: 'PDF', date: 'Oct 10, 2023', size: '1.5 MB' },
  ];

  return (
    <div className={`${styles.container} animate-enter`}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>My Documents</h1>
        <div className={styles.controls}>
          <div className={styles.viewToggle}>
            <button 
              className={`${styles.toggleBtn} ${viewMode === 'grid' ? styles.active : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={20} />
            </button>
            <button 
              className={`${styles.toggleBtn} ${viewMode === 'list' ? styles.active : ''}`}
              onClick={() => setViewMode('list')}
            >
              <List size={20} />
            </button>
          </div>
          <Button size="sm">Upload New</Button>
        </div>
      </div>

      <div className={viewMode === 'grid' ? styles.grid : styles.list}>
        {docs.map(doc => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
      </div>
    </div>
  );
};

export default MyDocuments;
