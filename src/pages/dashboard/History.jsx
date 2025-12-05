import React, { useState } from 'react';
import { Search, Filter, Calendar, FileText, MoreVertical, Eye } from 'lucide-react';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './History.module.css';

const History = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const documents = [
    { id: 1, name: 'Residence_denial_ES.pdf', country: '🇪🇸', date: 'Oct 12, 2024', status: 'In review' },
    { id: 2, name: 'Visa_application_DE.pdf', country: '🇩🇪', date: 'Oct 10, 2024', status: 'Completed' },
    { id: 3, name: 'Work_permit_PL.pdf', country: '🇵🇱', date: 'Oct 08, 2024', status: 'Completed' },
    { id: 4, name: 'Appeal_letter_draft.docx', country: '🇪🇸', date: 'Oct 05, 2024', status: 'Draft' },
    { id: 5, name: 'Bank_statement_translation.pdf', country: '🇫🇷', date: 'Sep 28, 2024', status: 'Completed' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Document History</h1>
        <Button>Upload New</Button>
      </div>

      <Card className={styles.filterCard}>
        <div className={styles.filters}>
          <div className={styles.searchWrapper}>
            <Input 
              placeholder="Search documents..." 
              icon={Search} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              containerClassName={styles.searchInput}
            />
          </div>
          <div className={styles.filterGroup}>
            <div className={styles.selectWrapper}>
              <Filter size={16} className={styles.selectIcon} />
              <select className={styles.select}>
                <option>All Statuses</option>
                <option>Completed</option>
                <option>In Review</option>
                <option>Draft</option>
              </select>
            </div>
            <div className={styles.selectWrapper}>
              <Calendar size={16} className={styles.selectIcon} />
              <select className={styles.select}>
                <option>All Time</option>
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      <Card className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Document</th>
              <th>Country</th>
              <th>Created</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td>
                  <div className={styles.docCell}>
                    <div className={styles.docIcon}>
                      <FileText size={18} />
                    </div>
                    <span className={styles.docName}>{doc.name}</span>
                  </div>
                </td>
                <td>
                  <span className={styles.countryFlag}>{doc.country}</span>
                </td>
                <td className={styles.dateCell}>{doc.date}</td>
                <td>
                  <span className={`${styles.statusBadge} ${styles[doc.status.toLowerCase().replace(' ', '')]}`}>
                    {doc.status}
                  </span>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.actionBtn} title="View">
                      <Eye size={18} />
                    </button>
                    <button className={styles.actionBtn} title="More">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Empty State (Hidden for now) */}
        {documents.length === 0 && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <FileText size={48} />
            </div>
            <h3>No documents yet</h3>
            <p>Start by uploading your first immigration document.</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default History;
