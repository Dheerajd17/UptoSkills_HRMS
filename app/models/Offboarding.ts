import mongoose from 'mongoose';

const offboardingSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  lastWorkingDate: {
    type: Date,
    required: true
  },
  reason: String,
  status: {
    type: String,
    enum: ['Initiated', 'In Progress', 'Completed'],
    default: 'Initiated'
  },
  tasks: [{
    title: String,
    department: String,
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee'
    },
    status: {
      type: String,
      enum: ['Pending', 'Completed'],
      default: 'Pending'
    },
    completedAt: Date
  }],
  exitInterview: {
    scheduled: Date,
    conductor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee'
    },
    feedback: String
  },
  clearances: [{
    department: String,
    status: String,
    clearedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee'
    },
    clearedAt: Date
  }]
}, { timestamps: true });

const Offboarding = mongoose.models.Offboarding || mongoose.model('Offboarding', offboardingSchema);
export default Offboarding;